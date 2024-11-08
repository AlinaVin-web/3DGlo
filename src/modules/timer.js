const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDays = timerHours.cloneNode(true);
    const timerDaysSpan = document.createElement('span');
    let idInterval;

    const getTimeRemaining = () => {
        const dateStop = new Date(deadline).getTime();
        const dateNow = new Date().getTime();
        const timeRemaining = (dateStop - dateNow) / 1000;
        const days = Math.floor(timeRemaining / 86400);
        const hours = Math.floor((timeRemaining / 3600) % 24);
        const minutes = Math.floor((timeRemaining / 60) % 60);
        const seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        }
    }
    const updateClock = () => {
        const getTime = getTimeRemaining();
        if (getTime.timeRemaining <= 0) {
            clearInterval(idInterval);
            return;
        }
        if (getTime.days) {
            timerDays.style.display = '';
            timerDaysSpan.style.display = '';
            if (getTime.days < 10) getTime.days = "0" + getTime.days;
            timerDays.textContent = getTime.days;
        } else {
            timerDays.style.display = 'none';
            timerDaysSpan.style.display = 'none';
        }

        if (getTime.hours < 10) getTime.hours = "0" + getTime.hours;
        if (getTime.minutes < 10) getTime.minutes = "0" + getTime.minutes;
        if (getTime.seconds < 10) getTime.seconds = "0" + getTime.seconds;
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;
    }


    timerDays.id = 'timer-days';
    timerDays.style.display = 'none';
    timerDays.textContent = '00';

    timerDaysSpan.innerHTML = ':';
    timerDaysSpan.style.display = 'none';

    timerHours.before(timerDays, ' ', timerDaysSpan, ' ');

    updateClock();
    idInterval = setInterval(updateClock, 1000);
}

export default timer;