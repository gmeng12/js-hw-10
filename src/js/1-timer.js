import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const dateTimePicker = document.getElementById('datetime-picker');
const startButton = document.querySelector('[data-start]');

let countdownInterval;
let userSelectedDate;
let differenceMs;
let countdownStarted = false;
let currentDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];

    if (!userSelectedDate) {
      startButton.disabled = true;
      countdownStarted = false;
      if (countdownInterval) {
  clearInterval(countdownInterval);
}
      return;
    }

    if (userSelectedDate < currentDate) {
      startButton.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future',
      });
      updateCountdownUI({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      countdownStarted = false;
    } else {
      startButton.disabled = false;
      clearInterval(countdownInterval);
      const initialCountdown = convertMs(userSelectedDate.getTime() - currentDate.getTime());
      updateCountdownUI();
      countdownStarted = false;
    }
  },
};
currentDate = new Date();
flatpickr('#datetime-picker', options);


startButton.addEventListener('click', startCountdown);

function updateCountdown() {
  if (differenceMs <= 0) {
    clearInterval(countdownInterval);
    startButton.disabled = true;
    dateTimePicker.disabled = false;
  } else {
    const { days, hours, minutes, seconds } = convertMs(differenceMs);
    updateCountdownUI({ days, hours, minutes, seconds });
  }

  differenceMs = differenceMs - 1000;
}

startButton.disabled = true;

function startCountdown() {
  if (!userSelectedDate) {
    iziToast.error({
      title: 'Error',
      message: 'Please choose a date in the future',
    });
    return;
  }

if (!countdownStarted) {
  differenceMs = userSelectedDate.getTime() - currentDate.getTime();
  countdownStarted = true; 
  }
  
     updateCountdown();
    
    startButton.disabled = true;
    dateTimePicker.disabled = true;

    clearInterval(countdownInterval);
    
   

  countdownInterval = setInterval(updateCountdown, 1000);
   
}

function updateCountdownUI({ days, hours, minutes, seconds }) {
  document.querySelector('[data-days]').textContent = addLeadingZero(days);
  document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
  document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
  document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
