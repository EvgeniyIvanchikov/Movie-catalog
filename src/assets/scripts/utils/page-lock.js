import { globalState } from '@/assets/scripts';

export const lockScroll = () => {
  globalState.isScrollLocked = true;
  document.body.style.overflow = 'hidden';
}
export const unLockScroll = () => {
  globalState.isScrollLocked = false;
  document.body.style.overflow = 'auto';
}
export const toggleLock = () => {
  if (globalState.isScrollLocked) {
    lockScroll()
  } else {
    unLockScroll()
  }
};