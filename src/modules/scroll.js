const scroll = () => {
    let scrollCount;
    let idAnimation;
    const menuItems = document.querySelectorAll('menu ul>li>a');
    const banerBtn = document.querySelector('main>a');


    const scrollAnimation = (toElem) => {
        scrollCount += 30;
        idAnimation = requestAnimationFrame(() => { scrollAnimation(toElem) });
        if (scrollCount <= toElem) scrollTo(0, scrollCount);
        else cancelAnimationFrame(idAnimation);
    }

    const scrollToLink = (e) => {
        e.preventDefault();
        const link = e.currentTarget.href.substring(e.currentTarget.href.indexOf("#") + 1);
        const goToElem = document.getElementById(link);
        scrollCount = document.documentElement.scrollTop;
        idAnimation = requestAnimationFrame(() => { scrollAnimation(goToElem.offsetTop) });
    }

    menuItems.forEach(menuItem => {
        menuItem.addEventListener('click', scrollToLink);
    });
    banerBtn.addEventListener('click', scrollToLink);
}
export default scroll;