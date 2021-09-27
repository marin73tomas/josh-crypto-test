"use strict";

function _interopDefault(ex) {
  return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
}

var _extends = _interopDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutPropertiesLoose = _interopDefault(
  require("@babel/runtime/helpers/objectWithoutPropertiesLoose")
);
var React = _interopDefault(require("react"));

function getPoint(r, degree, size, dy) {
  var d = (degree / 180) * Math.PI;
  return {
    x: r * Math.sin(d) + size / 2,
    y: r * (1 - Math.cos(d)) + dy,
  };
}

var ProgressLabel = function ProgressLabel(_ref) {
  var _ref$components = _ref.components,
    Svg = _ref$components.Svg,
    Circle = _ref$components.Circle,
    Path = _ref$components.Path,
    Text = _ref$components.Text,
    progress = _ref.progress,
    progressWidth = _ref.progressWidth,
    progressColor = _ref.progressColor,
    trackWidth = _ref.trackWidth,
    trackBorderWidth = _ref.trackBorderWidth,
    trackBorderColor = _ref.trackBorderColor,
    cornersWidth = _ref.cornersWidth,
    fillColor = _ref.fillColor,
    trackColor = _ref.trackColor,
    startDegree = _ref.startDegree,
    size = _ref.size,
    text = _ref.text,
    textProps = _ref.textProps,
    props = _objectWithoutPropertiesLoose(_ref, [
      "components",
      "progress",
      "progressWidth",
      "progressColor",
      "trackWidth",
      "trackBorderWidth",
      "trackBorderColor",
      "cornersWidth",
      "fillColor",
      "trackColor",
      "startDegree",
      "size",
      "text",
      "textProps",
    ]);

  var size2 = size / 2;
  var cx = size2;
  var cy = cx;
  var dy = trackWidth / 2 + trackBorderWidth;
  var r = size2 - dy;
  var endDegree = startDegree + (progress * 360) / 100;
  var s = getPoint(r, startDegree, size, dy);
  var e = getPoint(r, endDegree, size, dy);
  var progressPath = null;

  if (progress < 50) {
    progressPath =
      "M " +
      s.x +
      " " +
      s.y +
      " A " +
      r +
      " " +
      r +
      ", 0, 0, 1, " +
      e.x +
      "," +
      e.y;
  } else {
    var m = getPoint(r, startDegree + 180, size, dy);
    progressPath =
      "M " +
      s.x +
      " " +
      s.y +
      " A " +
      r +
      " " +
      r +
      ", 0, 0, 1, " +
      m.x +
      "," +
      m.y +
      "\n        M " +
      m.x +
      " " +
      m.y +
      " A " +
      r +
      " " +
      r +
      ", 0, 0, 1, " +
      e.x +
      "," +
      e.y;
  }

  var progressStyle = {
    strokeWidth: progressWidth,
    stroke: progressColor,
    fill: "none",
  };
  return React.createElement(
    Svg,
    _extends({}, props, {
     //  width: size,
     //  height: size,
      viewBox: "0 0 " + size + " " + size,
      fill: trackColor,
    }),
    trackBorderWidth > 0
      ? React.createElement(Circle, {
          cx: cx,
          cy: cy,
          r: size2 - trackBorderWidth / 2,
          style: {
            stroke: trackBorderColor,
            strokeWidth: trackBorderWidth,
          },
        })
      : null,
    trackBorderWidth > 0
      ? React.createElement(Circle, {
          cx: cx,
          cy: cy,
          r: size2 - trackBorderWidth - trackWidth - trackBorderWidth / 2,
          style: {
            stroke: trackBorderColor,
            strokeWidth: trackBorderWidth,
            fill: fillColor,
          },
        })
      : null,
    progress > 0
      ? React.createElement(Path, {
          d: progressPath,
          style: progressStyle,
        })
      : null,
    progress > 0
      ? React.createElement(Circle, {
          cx: s.x,
          cy: s.y,
          r: cornersWidth,
          fill: progressColor,
        })
      : null,
    progress > 0
      ? React.createElement(Circle, {
          cx: e.x,
          cy: e.y,
          r: cornersWidth,
          fill: progressColor,
        })
      : null,
    text ? React.createElement(Text, textProps, text) : null
  );
};

ProgressLabel.defaultProps = {
  startDegree: 0,
  progress: 0,
  progressWidth: 5,
  trackWidth: 20,
  trackBorderWidth: 0,
  trackBorderColor: "#0000ff",
  cornersWidth: 10,
  size: 200,
  fillColor: "#ffffff",
  trackColor: "#ff0000",
  progressColor: "#00ff00",
  components: {
    Svg: "svg",
    Path: "path",
    Circle: "circle",
    Text: "text",
  },
};

module.exports = ProgressLabel;
