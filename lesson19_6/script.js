
const week = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const helloTime = ['Доброй ночи', 'Доброе утро', 'Добрый день', 'Добрый вечер'];

const dayFormat = (days) => {
    if (days % 10 === 1 && days !== 11) return days += " день";
    else if (days % 10 >= 2 && days % 10 <= 4 && (days < 12 || days > 14)) return days += " дня";
    else return days += " дней";
}
const infoOutput = () => {
    const now = new Date();
    const dateNewYear = new Date((now.getFullYear() + 1), 0, 1, 0, 0, 0, 0).getTime();
    const daysToNewYear = Math.floor((dateNewYear - now.getTime()) / 86400000);

    document.body.innerText = `${helloTime[Math.floor(now.getHours() / 6)]}
    Сегодня: ${week[now.getDay()]}
    Текущее время: ${now.toLocaleTimeString('en')}
    До нового года осталось: ${dayFormat(daysToNewYear)}`;
}

infoOutput();
setInterval(infoOutput, 1000);
