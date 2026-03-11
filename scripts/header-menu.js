document.querySelectorAll('.menu-central').forEach((menu, index) => {
    const toggle = menu.querySelector('.menu-toggle');
    const options = menu.querySelector('.opcoes');

    if (!toggle || !options) return;

    const menuId = `menu-opcoes-${index + 1}`;
    options.id = menuId;
    toggle.setAttribute('aria-controls', menuId);

    const closeMenu = () => {
        menu.classList.remove('menu-open');
        toggle.setAttribute('aria-expanded', 'false');
    };

    toggle.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    options.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            if (window.matchMedia('(max-width: 1024px)').matches) {
                closeMenu();
            }
        });
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
            closeMenu();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });
});
