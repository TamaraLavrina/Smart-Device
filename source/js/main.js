import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {accordeonInit} from './modules/accordeon';
import {formValid} from './modules/form';
import iMask from 'imask';
import {validateModalForm} from './modules/modal-form.js';

const inputElement = document.querySelector('[name="tel"]');
const maskOptions = {mask: '+{7}(000)000-00-00'};

// ---------------------------------

const breakpoint = window.matchMedia('(max-width:768px)');
const breakpointChecker = () => {
  if (!breakpoint.matches) {
    return;
  } else {
    accordeonInit();
  }
};

window.addEventListener('DOMContentLoaded', () => {

  iosVhFix();

  // Modules
  initModals();
  validateModalForm();
  breakpointChecker();
  iMask(inputElement, maskOptions);

  window.addEventListener('load', () => {
    formValid();
  });
});
