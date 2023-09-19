function updateDateTime() {
    const utcTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');

    const now = new Date();

    const utcOffsetMilliseconds = 1 * 60 * 60 * 1000;

    const timeInUTCPlus1 = new Date(now.getTime() + utcOffsetMilliseconds);

    const dayOfWeek = timeInUTCPlus1.toLocaleDateString(undefined,{weekday: 'long'});
    const hours = timeInUTCPlus1.getUTCHours().toString().padStart(2,'0');
    const minutes = timeInUTCPlus1.getMinutes().toString().padStart(2,'0');
    const seconds = timeInUTCPlus1.getSeconds().toString().padStart(2,'0');

    utcTimeElement.textContent = `UTC Time: ${hours}:${minutes}:${seconds}`;
    dayOfWeekElement.textContent = `Day of the Week: ${dayOfWeek}`;
}

setInterval(updateDateTime, 1000);

updateDateTime();