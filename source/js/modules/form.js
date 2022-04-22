const checkAgreement = (userCheckbox, button) => {
  if (userCheckbox.checked !== true) {
    button.disabled = true;
  } else {
    button.disabled = false;
  }
};

const userCheckbox = document.querySelector('#agree');
const submitHandler = document.querySelector('[type="submit"]');

const formValid = () => {
  userCheckbox.addEventListener('click', () => {
    checkAgreement(userCheckbox, submitHandler);
  });

  document.addEventListener('DOMContentLoaded', () => {

  });
};

export {formValid, checkAgreement};
