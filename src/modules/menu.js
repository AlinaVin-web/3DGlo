const toggleMenu = () => {
    const menu = document.querySelector('menu');

    document.body.addEventListener('click', (e) => {
        if (e.target.closest('header .menu')) {
            menu.classList.add('active-menu');
        } else if (!e.target.closest('.active-menu') || (e.target.closest('.active-menu') && (e.target.matches('a')))) {
            menu.classList.remove('active-menu');
        }
    });
}

export default toggleMenu;