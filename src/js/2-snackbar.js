import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('form');
const delayInput = document.querySelector('input[name="delay"]');
const stateInput = document.querySelector('input[name="state"]');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!delayInput.checkValidity() || !stateInput.checked) {
    iziToast.error({
      title: 'Error',
      message: 'Please fill in all fields',
      position: 'topRight',
    });
    return;
  }

  const delay = parseInt(delayInput.value, 10);
  const state = stateInput.value;

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });

  promise
    .then((delay) => {
      iziToast.success({
        title: 'Success',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch((delay) => {
      iziToast.error({
        title: 'Error',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
});
