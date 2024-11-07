const checkFields = () => {

    const inputsName = document.querySelectorAll('form[name="user_form"] input[name="user_name"]');
    const inputsText = document.querySelectorAll('form[name="user_form"] input[name="user_message"]');
    const inputsTel = document.querySelectorAll('form[name="user_form"] input[name="user_phone"]');
    const inputsEmail = document.querySelectorAll('form[name="user_form"] input[name="user_email"]');

    inputsName.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-я ]/g, '');
        });
    });
    inputsText.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-я\d \.,\-\!()\"\:]/g, '');
        });
    });
    inputsTel.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\d()\-\+]/g, '');
        });
    });
    inputsEmail.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\w@\-\.!~\*']/g, '');
        });
    });

}

export default checkFields;