const calcForm = () => {

    const inputs = document.querySelectorAll('#calc input[type="text"]');
    inputs.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/gi, '');
        });
    });
}

export default calcForm;