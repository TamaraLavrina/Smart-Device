import {checkAgreement} from './form';
import iMask from 'imask';

const modal = document.querySelector('.modal');
const modalInput = document.querySelector('[name="modal-tel"]');
const maskOptions = {mask: '+{7}(000)000-00-00'};
const userCheckbox = modal.querySelector('#agree');
const submitHandler = modal.querySelector('[type="submit"]');


const validateModalForm = () => {
  if (!modal) {
    return;
  } else {
    iMask(modalInput, maskOptions);
    checkAgreement(userCheckbox, submitHandler);
  }
};

export {validateModalForm};
