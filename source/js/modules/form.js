// import {sendData} from './fetch';
// import {showErrorCard, showSuccessCard} from './messages';

const checkAgreement = (userCheckbox, button) => {
  if (userCheckbox.checked !== true) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};

const userCheckbox = document.querySelector('#agree');
const submitHandler = document.querySelector('[type="submit"]');
// const form = document.querySelector('.form__questions');

// const setUserFormSubmit = (onSuccess) => {
//   form.addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     sendData(
//         () => {
//           onSuccess();
//           form.reset();
//         },
//         () => showErrorCard(),
//         new FormData(evt.target));
//   });
// };

const formValid = () => {
  if (!userCheckbox || !submitHandler) {
    return;
  } else {
    userCheckbox.addEventListener('click', () => {
      checkAgreement(userCheckbox, submitHandler);
    });
    // setUserFormSubmit(showSuccessCard, showErrorCard);
  }
};

export {formValid, checkAgreement};
