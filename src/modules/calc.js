const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block');
    const calcType = document.querySelector('.calc-type');
    const calcSquare = document.querySelector('.calc-square');
    const calcCount = document.querySelector('.calc-count');
    const calcDay = document.querySelector('.calc-day');
    const total = document.getElementById('total');
    const inputs = document.querySelectorAll('#calc input[type="text"]');
    let idInterval;

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value;
        const calcSquareValue = calcSquare.value;
        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;
        let count = 1;

        clearInterval(idInterval);
        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10;
        }

        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2;
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5;
        }

        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        } else {
            totalValue = 0;
        }
        if (totalValue > 0) {
            idInterval = setInterval(() => {
                if (count == 50) {
                    total.textContent = totalValue;
                    clearInterval(idInterval);
                    return;
                }
                total.textContent = Math.floor(totalValue / 50) * count;
                count++;
            }, 20);
        }
    }
    calcBlock.addEventListener('change', (e) => {
        if (e.target === calcType || e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc();
        }

    });

    inputs.forEach((value) => {
        value.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/gi, '');
        });
    });
}

export default calc;