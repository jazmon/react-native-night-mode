Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isNightMode = isNightMode;
exports.setNightMode = setNightMode;

var _reactNative = require('react-native');

var NightModeManager = _reactNative.NativeModules.NightModeManager;
function isNightMode() {
  return NightModeManager.isNightMode();
}

function setNightMode(mode) {
  NightModeManager.setNightMode(mode);
}

exports.default = {
  isNightMode: isNightMode,
  setNightMode: setNightMode
};