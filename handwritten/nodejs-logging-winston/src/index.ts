
import * as semver from 'semver';
import {LOGGING_TRACE_KEY as COMMON_TRACE_KEY} from './common';
import * as types from './types/core';


require('winston');
const winstonVersion = require('winston/package.json').version;

// This is a class.
// tslint:disable-next-line:variable-name
export const LoggingWinston: types.Logger = semver.lt(winstonVersion, '3.0.0') ?
    require('./winston2').LoggingWinston :
    require('./winston3').LoggingWinston;
// winstons are required instead of imported so they are not executed unless
// they're used.

export const LOGGING_TRACE_KEY = COMMON_TRACE_KEY;
