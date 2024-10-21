const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');
    const timerDays = timerHours.cloneNode(true);
    const timerDaysSpan = document.createElement('span');
    let idInterval;

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 86400);
        let hours = Math.floor((timeRemaining / 3600) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return {
            timeRemaining,
            days,
            hours,
            minutes,
            seconds
        }
    }
    const updateClock = () => {
        let getTime = getTimeRemaining();
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