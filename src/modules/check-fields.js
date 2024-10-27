const checkFields = () => {

    const inputsText = document.querySelectorAll('form[name="user_form"] input:not([type="email"],[type="tel"])');
    const inputsTel = document.querySelectorAll('form[name="user_form"] input[type="tel"]');
    const inputsEmail = document.querySelectorAll('form[name="user_form"] input[type="email"]');

    inputsText.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-я -]/g, '');
        });
    });
    inputsTel.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()-]/g, '');
        });
    });
    inputsEmail.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w@\-.!~*']/g, '');
        });
    });

}

export default checkFields;