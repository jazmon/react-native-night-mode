// @flow
type NightModeState = 'AUTO' | 'YES' | 'NO';

export function isNightMode(): ?NightModeState {
  return null;
}

// eslint-disable-next-line no-unused-vars
export function setNightMode(mode: NightModeState) {}

export default {
  isNightMode,
  setNightMode,
};
