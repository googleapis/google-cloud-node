/**
 * Copyright 2014, 2015 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

/** @const */ var _ = require('lodash');
/** @const */ var vm = require('vm');
/** @const */ var path = require('path');
/** @const */ var semver = require('semver');

/** @const */ var state = require('./state.js');
/** @const */ var StatusMessage = require('../status-message.js');

/** @const */ var messages = {
  INVALID_BREAKPOINT: 'invalid snapshot - id or location missing',
  SOURCE_FILE_NOT_FOUND:
    'A script matching the source file was not found loaded on the debuggee',
  SOURCE_FILE_AMBIGUOUS: 'Multiple files match the path specified',
  V8_BREAKPOINT_ERROR: 'Unable to set breakpoint in v8',
  SYNTAX_ERROR_IN_CONDITION: 'Syntax error in condition: ',
  ERROR_EVALUATING_CONDITION: 'Error evaluating condition: ',
  ERROR_COMPILING_CONDITION: 'Error compiling condition.',
  DISALLOWED_EXPRESSION: 'Expression not allowed',
  SOURCE_MAP_READ_ERROR: 'The source map could not be read or was incorrectly formatted',
  V8_BREAKPOINT_DISABLED: 'Internal error: V8 breakpoint externally disabled',
  CAPTURE_BREAKPOINT_DATA: 'Error trying to capture snapshot data: ',
  INVALID_LINE_NUMBER: 'Invalid snapshot position: ',
  COULD_NOT_FIND_OUTPUT_FILE: 
    'Could not determine the output file associated with the transpiled input file'
};

/** @const */ var MODULE_WRAP_PREFIX_LENGTH = require('module').wrap('☃')
                                                               .indexOf('☃');

/**
 * Formats a provided message and a high-resolution interval of the format
 * [seconds, nanoseconds] (for example, from process.hrtime()) prefixed with a
 * provided message as a string intended for logging.
 * @param {string} msg The mesage that prefixes the formatted interval.
 * @param {number[]} interval The interval to format.
 * @return {string} A formatted string.
 */
var formatInterval = function(msg, interval) {
  return msg + (interval[0] * 1000 + interval[1] / 1000000) + 'ms';
};

var singleton;
module.exports.create = function(logger_, config_, jsFiles_, sourcemapper_) {
  if (singleton && !config_.forceNewAgent_) {
    return singleton;
  }

  var v8 = null;
  var logger = null;
  var config = null;
  var fileStats = null;
  var breakpoints = {};
  var sourcemapper = null;
  // Entries map breakpoint id to { enabled: <bool>, listener: <function> }
  var listeners = {};
  var numBreakpoints = 0;
  // Before V8 4.5, having a debug listener active disables optimization. To
  // deal with this we only activate the listener when there is a breakpoint
  // active, and remote it as soon as the snapshot is taken. Furthermore, 4.5
  // changes the API such that Debug.scripts() crashes unless a listener is
  // active. We use a permanent listener on V8 4.5+.
  var v8_version = /(\d+\.\d+\.\d+)\.\d+/.exec(process.versions.v8);
  if (!v8_version || v8_version.length < 2) {
    return null;
  }
  var usePermanentListener = semver.satisfies(v8_version[1], '>=4.5');

  // Node.js v0.11+ have the runInDebugContext method that can be used to fetch
  // the API object.
  if (!vm.runInDebugContext) {
    return null;
  }

  v8 = vm.runInDebugContext('Debug');
  logger = logger_;
  config = config_;
  fileStats = jsFiles_;
  sourcemapper = sourcemapper_;

  if (usePermanentListener) {
    logger.info('activating v8 breakpoint listener (permanent)');
    v8.setListener(handleDebugEvents);
  }

  /* -- Public Interface -- */

  singleton = {
    /**
     * @param {!Breakpoint} breakpoint Debug API Breakpoint object
     * @param {function(?Error)} cb callback with an options error string 1st
     *            argument
     */
    set: function(breakpoint, cb) {
      if (!v8 ||
          !breakpoint ||
          typeof breakpoint.id === 'undefined' || // 0 is a valid id
          !breakpoint.location ||
          !breakpoint.location.path ||
          !breakpoint.location.line) {
        return setErrorStatusAndCallback(cb, breakpoint,
          StatusMessage.UNSPECIFIED, messages.INVALID_BREAKPOINT);
      }

      var baseScriptPath = path.normalize(breakpoint.location.path);
      if (!sourcemapper.hasMappingInfo(baseScriptPath)) {
        if (!_.endsWith(baseScriptPath, '.js')) {
          return setErrorStatusAndCallback(cb, breakpoint,
                  StatusMessage.BREAKPOINT_SOURCE_LOCATION,
                  messages.COULD_NOT_FIND_OUTPUT_FILE);
        }

        setInternal(breakpoint, null /* mapInfo */, null /* compile */, cb);
      }
      else {
        var line = breakpoint.location.line;
        var column = 0;
        var mapInfo = sourcemapper.mappingInfo(baseScriptPath, line, column);

        var compile = getBreakpointCompiler(breakpoint);
        if (breakpoint.condition && compile) {
          try {
            breakpoint.condition = compile(breakpoint.condition);
          } catch (e) {
            logger.info('Unable to compile condition >> ' +
              breakpoint.condition + ' <<');
            return setErrorStatusAndCallback(cb, breakpoint,
                StatusMessage.BREAKPOINT_CONDITION,
                messages.ERROR_COMPILING_CONDITION);
          }
        }

        setInternal(breakpoint, mapInfo, compile, cb);
      }
    },

    clear: function(breakpoint) {
      if (typeof breakpoint.id === 'undefined') {
        return false;
      }
      var breakpointData = breakpoints[breakpoint.id];
      if (!breakpointData) {
        return false;
      }
      var v8bp = breakpointData.v8Breakpoint;

      v8.clearBreakPoint(v8bp.number());
      delete breakpoints[breakpoint.id];
      delete listeners[v8bp.number()];
      numBreakpoints--;
      if (numBreakpoints === 0 && !usePermanentListener) {
        // removed last breakpoint
        logger.info('deactivating v8 breakpoint listener');
        v8.setListener(null);
      }
      return true;
    },

    /**
     * @param {Breakpoint} breakpoint
     * @param {Function} callback
     */
    wait: function(breakpoint, callback) {
      var num = breakpoints[breakpoint.id].v8Breakpoint.number();
      var listener = onBreakpointHit.bind(
          null, breakpoint, function(err) {
            listeners[num].enabled = false;
            // This method is called from the debug event listener, which
            // swallows all exception. We defer the callback to make sure the
            // user errors aren't silenced.
            setImmediate(function() {
              callback(err);
            });
          });

      listeners[num] = { enabled: true, listener: listener };
    },

    /**
     * @param {Breakpoint} breakpoint
     * @param {Function} callback
     */
    log: function(breakpoint, print, shouldStop) {
      var num = breakpoints[breakpoint.id].v8Breakpoint.number();
      var logsThisSecond = 0;
      var timesliceEnd = Date.now() + 1000;
      var listener = onBreakpointHit.bind(
          null, breakpoint, function(err) {
        var currTime = Date.now();
        if (currTime > timesliceEnd) {
          logsThisSecond = 0;
          timesliceEnd = currTime + 1000;
        }
        print(breakpoint.logMessageFormat,
          breakpoint.evaluatedExpressions.map(JSON.stringify));
        logsThisSecond++;
        if (shouldStop()) {
          listeners[num].enabled = false;
        } else {
          if (logsThisSecond >= config.log.maxLogsPerSecond) {
            listeners[num].enabled = false;
            setTimeout(function() {
              // listeners[num] may have been deleted by `clear` during the
              // async hop. Make sure it is valid before setting a property on
              // it.
              if (!shouldStop() && listeners[num]) {
                listeners[num].enabled = true;
              }
            }, config.log.logDelaySeconds * 1000);
          }
        }
      });
      listeners[num] = { enabled: true, listener: listener };
    },

    // The following are for testing:
    messages: messages,
    numBreakpoints_: function() { return Object.keys(breakpoints).length; },
    numListeners_: function()   { return Object.keys(listeners).length; }
  };

  /* -- Private Functions -- */

  /**
   * Internal breakpoint set function. At this point we have looked up source
   * maps (if necessary), and scriptPath happens to be a JavaScript path.
   *
   * @param {!Breakpoint} breakpoint Debug API Breakpoint object
   * @param {!string} scriptPath path to JavaScript source file
   * @param {function(string)=} compile optional compile function that can be
   *    be used to compile source expressions to JavaScript
   * @param {function(?Error)} cb error-back style callback
   */
  function setInternal(breakpoint, mapInfo, compile, cb) {
    // Parse and validate conditions and watch expressions for correctness and
    // immutability
    var ast = null;
    if (breakpoint.condition) {
      var acorn = require('acorn');
      try {
        // We parse as ES6; even though the underlying V8 version may only
        // support a subset. This should be fine as the objective of the parse
        // is to heuristically find side-effects. V8 will raise errors later
        // if the syntax is invalid. It would have been nice if V8 had made the
        // parser API available us :(.
        ast = acorn.parse(breakpoint.condition, {
          sourceType: 'script',
          ecmaVersion: 6
        });
        var validator = require('./validator.js');
        if (!validator.isValid(ast)) {
          return setErrorStatusAndCallback(cb, breakpoint,
            StatusMessage.BREAKPOINT_CONDITION,
            messages.DISALLOWED_EXPRESSION);
        }
      } catch (err) {
        var message = messages.SYNTAX_ERROR_IN_CONDITION + err.message;
        return setErrorStatusAndCallback(cb, breakpoint,
          StatusMessage.BREAKPOINT_CONDITION, message);
      }
    }

    // Presently it is not possible to precisely disambiguate the script
    // path from the path provided by the debug server. The issue is that we
    // don't know the repository root relative to the root filesystem or relative
    // to the working-directory of the process. We want to make sure that we are
    // setting the breakpoint that the user intended instead of a breakpoint
    // in a file that happens to have the same name but is in a different
    // directory. Until this is addressed between the server and the debuglet,
    // we are going to assume that repository root === the starting working
    // directory.
    var matchingScript;
    var scripts = findScripts(mapInfo ? mapInfo.file : 
      path.normalize(breakpoint.location.path));
    if (scripts.length === 0) {
      return setErrorStatusAndCallback(cb, breakpoint,
        StatusMessage.BREAKPOINT_SOURCE_LOCATION,
        messages.SOURCE_FILE_NOT_FOUND);
    } else if (scripts.length === 1) {
      // Found the script
      matchingScript = scripts[0];
    } else {
      return setErrorStatusAndCallback(cb, breakpoint,
        StatusMessage.BREAKPOINT_SOURCE_LOCATION,
        messages.SOURCE_FILE_AMBIGUOUS);
    }

    if (breakpoint.location.line >= fileStats[matchingScript].lines) {
      return setErrorStatusAndCallback(cb, breakpoint,
        StatusMessage.BREAKPOINT_SOURCE_LOCATION,
        messages.INVALID_LINE_NUMBER + matchingScript + ':' +
          breakpoint.location.line + '. Loaded script contained ' +
          fileStats[matchingScript].lines + ' lines. Please ensure' +
          ' that the snapshot was set in the same code version as the' +
          ' deployed source.');
    }

    // The breakpoint protobuf message presently doesn't have a column property
    // but it may have one in the future.
    var column = mapInfo && mapInfo.column ? mapInfo.column : 
      (breakpoint.location.column || 1);
    var line = mapInfo ? mapInfo.line : breakpoint.location.line;

    // We need to special case breakpoints on the first line. Since Node.js
    // wraps modules with a function expression, we adjust
    // to deal with that.
    if (line === 1) {
      column += MODULE_WRAP_PREFIX_LENGTH - 1;
    }

    var v8bp = setByRegExp(matchingScript, line, column);
    if (!v8bp) {
      return setErrorStatusAndCallback(cb, breakpoint,
        StatusMessage.BREAKPOINT_SOURCE_LOCATION,
        messages.V8_BREAKPOINT_ERROR);
    }

    if (numBreakpoints === 0 && !usePermanentListener) {
      // added first breakpoint
      logger.info('activating v8 breakpoint listener');
      v8.setListener(handleDebugEvents);
    }

    breakpoints[breakpoint.id] = new BreakpointData(breakpoint, v8bp, ast, compile);
    numBreakpoints++;

    setImmediate(function() { cb(null); }); // success.
  }

  /**
   * Produces a compilation function based on the file extension of the
   * script path in which the breakpoint is set.
   *
   * @param {Breakpoint} breakpoint
   */
  function getBreakpointCompiler(breakpoint) {
    switch(path.normalize(breakpoint.location.path).split('.').pop()) {
      case 'coffee':
        return function(uncompiled) {
          var comp = require('coffee-script');
          var compiled = comp.compile('0 || (' + uncompiled + ')');
          // Strip out coffeescript scoping wrapper to get translated condition
          var re = /\(function\(\) {\s*0 \|\| \((.*)\);\n\n\}\)\.call\(this\);/;
          var match = re.exec(compiled);
          if (match && match.length > 1) {
            return match[1].trim();
          } else {
            throw new Error('Compilation Error for: ' + uncompiled);
          }
        };
      case 'es6':
      case 'es':
      case 'jsx':
        return function(uncompiled) {
          // If we want to support es6 watch expressions we can compile them here.
          // Babel is a large dependency to have if we don't need it in all cases.
          return uncompiled;
        };
    }
    return null;
  }

  /**
   * @param {!string} scriptPath path of a script
   */
  function pathToRegExp(scriptPath) {
    // make sure the script path starts with a slash. This makes sure our
    // regexp doesn't match monkey.js when the user asks to set a breakpoint
    // in key.js
    if (path.sep === '/' || scriptPath.indexOf(':') === -1) {
      scriptPath = path.join(path.sep, scriptPath);
    }
    if (path.sep !== '/') {
      scriptPath = scriptPath.replace(new RegExp('\\\\', 'g'), '\\\\');
    }
    return new RegExp(scriptPath + '$');
  }

  function setByRegExp(scriptPath, line, column) {
    var regexp = pathToRegExp(scriptPath);
    var num = v8.setScriptBreakPointByRegExp(regexp, line - 1, column - 1);
    var v8bp = v8.findBreakPoint(num);
    return v8bp;
  }

  // function setById(scriptPath, line) {
  //   var script = findScript(scriptPath);
  //   if (!script) {
  //     return null;
  //   }

  //   // v8 uses 0-based line numbers                     ----v
  //   var position = v8.findScriptSourcePosition(script, line - 1, 0);
  //   if (!position) {
  //     return null;
  //   }

  //   var v8bp = v8.setBreakPointByScriptIdAndPosition(
  //     script.id, position, null /* condition */, true /*enabled*/
  //   );
  //   if (!v8bp) {
  //     return null;
  //   }

  //   return v8bp;
  // }

  function findScripts(scriptPath) {
    // Use repository relative mapping if present.
    if (config.appPathRelativeToRepository) {
      var candidate = scriptPath.replace(config.appPathRelativeToRepository,
        config.workingDirectory);
      // There should be no ambiguity resolution if project root is provided.
      return fileStats[candidate] ? [ candidate ] : [];
    }
    var regexp = pathToRegExp(scriptPath);
    // Next try to match path.
    var matches = Object.keys(fileStats).filter(regexp.test.bind(regexp));
    // Finally look for files with the same name regardless of path.
    if (matches.length !== 1) {
      matches = Object.keys(fileStats);
      var components = scriptPath.split(path.sep);
      for (var i = components.length - 1;
           i >= 0 && matches.length > 1; i--) {
        regexp = pathToRegExp(components.slice(i).join(path.sep));
        matches = matches.filter(regexp.test.bind(regexp));
      }
    }
    return matches;
  }

  function onBreakpointHit(breakpoint, callback, execState) {
    var v8bp = breakpoints[breakpoint.id].v8Breakpoint;

    if (!v8bp.active()) {
      // Breakpoint exists, but not active. We never disable breakpoints, so
      // this is theoretically not possible. Perhaps this is possible if there
      // is a second debugger present? Regardless, report the error.
      return setErrorStatusAndCallback(callback, breakpoint,
        StatusMessage.BREAKPOINT_SOURCE_LOCATION,
        messages.V8_BREAKPOINT_DISABLED);
    }

    var result = checkCondition(breakpoint, execState);
    if (result.error) {
      return setErrorStatusAndCallback(callback, breakpoint,
        StatusMessage.BREAKPOINT_CONDITION,
        messages.ERROR_EVALUATING_CONDITION + result.error);
    } else if (!result.value) {
      // Check again next time
      logger.info('\tthe breakpoint condition wasn\'t met');
      return;
    }

    // Breakpoint Hit
    var start = process.hrtime();
    try {
      captureBreakpointData(breakpoint, execState);
    } catch (err) {
      return setErrorStatusAndCallback(callback, breakpoint,
        StatusMessage.BREAKPOINT_SOURCE_LOCATION,
        messages.CAPTURE_BREAKPOINT_DATA + err);
    }
    var end = process.hrtime(start);
    logger.info(formatInterval('capture time: ', end));
    callback(null);
  }

  /**
   * @param {Debug.DebugEvent} evt
   * @param {Debug#ExecutionState} execState
   * @param {Debug#BreakEvent} eventData
   */
  function handleDebugEvents(evt, execState, eventData) {
    try {
      switch (evt) {
        case v8.DebugEvent.Break:
          eventData.breakPointsHit().forEach(function(hit) {
            var num = hit.script_break_point().number();
            if (listeners[num].enabled) {
              logger.info('>>>V8 breakpoint hit<<< number: ' + num);
              listeners[num].listener(execState, eventData);
            }
          });
          break;
      }
    } catch (e) {
      logger.warn('Internal V8 error on breakpoint event: ' + e);
    }
  }

  function captureBreakpointData(breakpoint, execState) {
    var expressionErrors = [];
    if (breakpoint.expressions && breakpoints[breakpoint.id].compile) {
      for (var i = 0; i < breakpoint.expressions.length; i++) {
        try {
          breakpoint.expressions[i] =
            breakpoints[breakpoint.id].compile(breakpoint.expressions[i]);
        } catch (e) {
          logger.info('Unable to compile watch expression >> ' +
              breakpoint.expressions[i] + ' <<');
          expressionErrors.push({
            name: breakpoint.expressions[i],
            status: new StatusMessage(StatusMessage.VARIABLE_VALUE,
                                      'Error Compiling Expression', true)
          });
          breakpoint.expressions.splice(i, 1);
        }
      }
    }
    if (breakpoint.action === 'LOG') {
      // TODO: This doesn't work with compiled languages if there is an error
      // compiling one of the expressions in the loop above.
      if (!breakpoint.expressions) {
        breakpoint.evaluatedExpressions = [];
      } else {
        var frame = execState.frame(0);
        var evaluatedExpressions = breakpoint.expressions.map(function(exp) {
          var result = state.evaluate(exp, frame);
          return result.error ? result.error : result.mirror.value();
        });
        breakpoint.evaluatedExpressions = evaluatedExpressions;
      }
    } else {
      var captured = state.capture(execState, breakpoint.expressions, config, v8);
      breakpoint.stackFrames = captured.stackFrames;
      breakpoint.variableTable = captured.variableTable;
      breakpoint.evaluatedExpressions =
        expressionErrors.concat(captured.evaluatedExpressions);
    }
  }

  /**
   * Evaluates the breakpoint condition, if present.
   * @return object with either a boolean value or an error property
   */
  function checkCondition(breakpoint, execState) {
    if (!breakpoint.condition) {
      return { value: true };
    }

    var result = state.evaluate(breakpoint.condition, execState.frame(0));

    if (result.error) {
      return { error: result.error };
    }
    return { value: !!(result.mirror.value()) }; // intentional !!
  }

  /**
   * @constructor
   */
  function BreakpointData(apiBreakpoint, v8Breakpoint, parsedCondition, compile) {
    this.apiBreakpoint = apiBreakpoint;
    this.v8Breakpoint = v8Breakpoint;
    this.parsedCondition = parsedCondition;
    this.compile = compile;
  }

  function setErrorStatusAndCallback(fn, breakpoint, refersTo, message) {
    return setImmediate(function() {
      if (breakpoint && !breakpoint.status) {
        breakpoint.status = new StatusMessage(refersTo, message, true);
      }
      fn(new Error(message));
    });
  }

  return singleton;
};
