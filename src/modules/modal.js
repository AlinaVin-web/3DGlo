const modal = () => {
    const modal = document.querySelector('.popup');
    const modalContent = document.querySelector('.popup-content');
    const buttons = document.querySelectorAll('.popup-btn');
    let idAnimation;
    let pos;

    const modalAnimation = () => {
        pos += 2;
        idAnimation = requestAnimationFrame(modalAnimation);
        if (pos <= 10) modalContent.style.top = `${pos}%`;
        else cancelAnimationFrame(idAnimation);
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if (screen.width >= 768) {
                pos = -50;
                idAnimation = requestAnimationFrame(modalAnimation);
            } else {
                modalContent.style.top = '';
            }
        });
    });

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none';
        }
    })
}

export default modal;