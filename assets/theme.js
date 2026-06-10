const initMobileHeaderMenu = () => {
  const menuContainer = document.querySelector('#Details-menu-drawer-container');
  const menuToggle = menuContainer?.querySelector('.header__icon--summary');
  const menuPanel = menuContainer?.querySelector('.menu-drawer');

  if (!(menuContainer instanceof HTMLElement) || !(menuToggle instanceof HTMLElement) || !(menuPanel instanceof HTMLElement)) {
    return;
  }

  const syncMenuState = () => {
    const isOpen = menuContainer.open;
    menuContainer.classList.toggle('is-open', isOpen);
    menuPanel.classList.toggle('is-open', isOpen);
  };

  menuContainer.addEventListener('toggle', syncMenuState);
  menuToggle.addEventListener('click', () => {
    window.requestAnimationFrame(syncMenuState);
  });

  menuPanel.querySelectorAll('a[href]').forEach((link) => {
    link.addEventListener('click', () => {
      menuContainer.open = false;
      syncMenuState();
    });
  });

  syncMenuState();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMobileHeaderMenu, { once: true });
} else {
  initMobileHeaderMenu();
}
