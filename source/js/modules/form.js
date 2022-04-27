import {sendData} from './fetch';
import toastify from 'toastify-js';

const checkAgreement = (userCheckbox, button) => {
  if (userCheckbox.checked !== true) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};

const userCheckbox = document.querySelector('#agree');
const submitHandler = document.querySelector('[type="submit"]');
const form = document.querySelector('.form__questions');

const showErrorCard = () =>{
  toastify({
    text: 'Упс, что-то пошло не так, попробуйте еще раз!',
    duration: 3000,
    // destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top',
    positionLeft: false,
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
  }).showToast();
};

const showSuccessCard = () =>{
  toastify({
    text: 'Менеджер скоро свяжется с вами',
    duration: 3000,
    // destination: 'https://github.com/apvarun/toastify-js',
    newWindow: true,
    close: true,
    gravity: 'top',
    positionLeft: false,
    backgroundColor: 'linear-gradient(to right, #00b09b, #96c93d)',
  }).showToast();
};

const setUserFormSubmit = (onSuccess) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
        () => {
          onSuccess();
          form.reset();
        },
        () => {
          showErrorCard();
        },
        new FormData(evt.target));
  });
};

const formValid = () => {
  if (!userCheckbox || !submitHandler) {
    return;
  } else {
    userCheckbox.addEventListener('click', () => {
      checkAgreement(userCheckbox, submitHandler);
    });
    setUserFormSubmit(showSuccessCard, showErrorCard);
  }
};

export {formValid, checkAgreement, showSuccessCard, showErrorCard};
