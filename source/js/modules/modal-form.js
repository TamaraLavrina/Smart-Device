import iMask from 'imask';
import {sendData} from './fetch';
import {showErrorCard, showSuccessCard} from './form';


const modal = document.querySelector('.modal');
const modalInput = document.querySelector('[name="modal-tel"]');
const maskOptions = {mask: '+{7}(000)000-00-00'};
const userCheckbox = document.querySelector('#modal-agree');
const modalSubmitHandler = document.querySelector('.modal__btn-submit');
const feedbackButton = document.querySelector('[data-open-modal]');
const modalForm = document.querySelector('.modal__questions');

const checkAgreement = () => {
  if (modal) {
    if (userCheckbox.checked === true) {
      modalSubmitHandler.removeAttribute('disabled');
    } else {
      modalSubmitHandler.setAttribute('disabled', 'disabled');
    }
  } else {
    return;
  }
};

const setUserFormSubmit = (onSuccess) => {
  modalForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
        () => {
          onSuccess();
          modalForm.reset();
        },
        () => {
          showErrorCard();
        },
        new FormData(evt.target));
  });
};

const checkModal = () => {
  iMask(modalInput, maskOptions);
  userCheckbox.addEventListener('change', checkAgreement);
};

const validateModalForm = () => {
  if (feedbackButton) {
    feedbackButton.addEventListener('click', checkModal);
    setUserFormSubmit(showSuccessCard, showErrorCard);
  }
};

export {validateModalForm};

