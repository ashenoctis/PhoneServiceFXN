'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _utils = require('../../utils');

var getWidth = function getWidth(width) {
  if (typeof width !== 'number') return undefined;
  var colWidth = (0, _utils.normalizeColumnWidth)(width);
  return 100 / 12 * colWidth + '%';
};

exports.default = function (_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === undefined ? {} : _ref$width,
      _ref$offset = _ref.offset,
      offset = _ref$offset === undefined ? {} : _ref$offset,
      _ref$pull = _ref.pull,
      pull = _ref$pull === undefined ? {} : _ref$pull,
      _ref$push = _ref.push,
      push = _ref$push === undefined ? {} : _ref$push,
      debug = _ref.debug,
      screenClass = _ref.screenClass,
      gutterWidth = _ref.gutterWidth,
      moreStyle = _ref.moreStyle;

  var theGutterWidth = typeof gutterWidth === 'number' ? gutterWidth : _utils.defaultGutterWidth;

  var styles = _extends({
    boxSizing: 'border-box',
    minHeight: '1px',
    position: 'relative',
    paddingLeft: theGutterWidth / 2 + 'px',
    paddingRight: theGutterWidth / 2 + 'px',
    float: 'left'
  }, moreStyle);

  if (debug) {
    styles.paddingTop = '10px';
    styles.paddingBottom = '10px';
    styles.border = '1px solid rgba(86,86,86,.2)';
    styles.background = 'rgba(86,86,86,.15)';
  }

  styles.width = '100%';
  styles.marginLeft = '0%';
  styles.right = 'auto';
  styles.left = 'auto';

  _utils.screenClasses.forEach(function (size, index) {
    if (_utils.screenClasses.indexOf(screenClass) >= index) {
      styles.width = getWidth(width[size]) || styles.width;
      styles.marginLeft = getWidth(offset[size]) || styles.marginLeft;
      styles.right = getWidth(pull[size]) || styles.right;
      styles.left = getWidth(push[size]) || styles.left;
    }
  });

  return styles;
};