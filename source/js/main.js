import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {accordeonInit} from './modules/accordeon';
import {formValid} from './modules/form';
import iMask from 'imask';
import {validateModalForm} from './modules/modal-form.js';

const inputElement = document.querySelector('[name="tel"]');
const maskOptions = {mask: '+{7}(000)000-00-00'};

// ---------------------------------

const breakpoint = window.matchMedia(`(max-width:768px)`);
const breakpointChecker = () => {
  if (!breakpoint.matches) {
    return;
  } else {
    accordeonInit();
  }
};

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  initModals();
  validateModalForm();
  breakpointChecker();
  iMask(inputElement, maskOptions);

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    formValid();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используейтся matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
