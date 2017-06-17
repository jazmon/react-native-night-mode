// @flow
import { NativeModules } from 'react-native';

const { NightModeManager } = NativeModules;

type NightModeState = 'AUTO' | 'YES' | 'NO';

export function isNightMode(): ?NightModeState {
  return NightModeManager.isNightMode();
}

export function setNightMode(mode: NightModeState) {
  NightModeManager.setNightMode(mode);
}

export default {
  isNightMode,
  setNightMode,
};
