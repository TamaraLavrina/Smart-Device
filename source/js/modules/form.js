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
  if (!userCheckbox || !submitHandler) {
    return;
  } else {
    userCheckbox.addEventListener('click', () => {
      checkAgreement(userCheckbox, submitHandler);
    });
  }
};

export {formValid, checkAgreement};
