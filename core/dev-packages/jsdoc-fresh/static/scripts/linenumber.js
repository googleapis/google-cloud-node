'use strict';

(function () {
  let lineId, lines, totalLines, anchorHash;
  const source = document.getElementsByClassName('prettyprint source linenums');
  let i = 0;
  let lineNumber = 0;

  if (source && source[0]) {
    anchorHash = document.location.hash.substring(1);
    lines = source[0].getElementsByTagName('li');
    totalLines = lines.length;

    for (; i < totalLines; i++) {
      lineNumber++;
      lineId = 'line' + lineNumber;
      lines[i].id = lineId;
      if (lineId === anchorHash) {
        lines[i].className += ' selected';
      }
    }
  }
})();
