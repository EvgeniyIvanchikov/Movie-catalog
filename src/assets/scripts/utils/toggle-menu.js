import { globalState, lockScroll, unLockScroll } from '@/assets/scripts';

export const openMenu = () => {
  globalState.isMenuOpen = true;
  lockScroll();
}
export const closeMenu = () => {
  globalState.isMenuOpen = false;
  unLockScroll();
}
export const toggleMenu = () => {
  if (globalState.isMenuOpen) {
    closeMenu()
  } else {
    openMenu()
  }
};