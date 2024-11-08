const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId);
    const statusBlock = document.createElement('div');
    const img = document.createElement("img");
    const errorText = 'Ошибка';
    const successText = 'Спасибо! Наш менеджер с Вами свяжется';

    img.src = "././images/loader.gif";
    statusBlock.style.color = '#ffffff';

    const validate = (list) => {
        let success = true;
        list.forEach(input => {
            if (input.required && input.value.trim() === '') {
                success = false;
            }
        });
        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }

    const submitForm = () => {
        const formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        img.alt = "Loading";
        img.width = 50;
        img.height = 50;
        statusBlock.append(img);
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val.trim();
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = '';
                    });
                    setTimeout(() => statusBlock.textContent = '', 4000);

                })
                .catch(error => {
                    statusBlock.textContent = errorText;
                    setTimeout(() => statusBlock.textContent = '', 4000);
                });
        } else {
            statusBlock.textContent = errorText;
            setTimeout(() => statusBlock.textContent = '', 4000);
        }

    }
    try {
        if (!form) {
            throw new Error('Верните форму на место');
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            submitForm();

        });
    } catch (error) {
        console.log(error.message);
    }

}
export default sendForm;