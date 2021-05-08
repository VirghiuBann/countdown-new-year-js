const elementDay = document.getElementById("days"),
    elementHour = document.getElementById("hours"),
    elementMin = document.getElementById("mins"),
    elementSec = document.getElementById("seconds");

const newYearDateTime = new Date("Jan 1, 2022 00:00:00").getTime();
const intervalValue = 1000;

const countdown = () => {
    const currentDateTime = new Date().getTime();

    const countdownDistance = newYearDateTime - currentDateTime;

    const days = Math.floor(countdownDistance / (intervalValue * 3600 * 24));
    const hours = Math.floor(
        (countdownDistance % (intervalValue * 3600 * 24)) /
            (intervalValue * 60 * 60)
    );

    const mins = Math.floor(
        (countdownDistance % (intervalValue * 3600)) / (intervalValue * 60)
    );
    const seconds = Math.floor(
        (countdownDistance % (intervalValue * 60)) / intervalValue
    );

    elementDay.innerHTML = days;
    elementHour.innerHTML = hours;
    elementMin.innerHTML = mins;
    elementSec.innerHTML = seconds;

    if (countdownDistance < 0) {
        clearInterval(counterTimeInterval);
    }
};

const counterTimeInterval = setInterval(countdown, intervalValue);
