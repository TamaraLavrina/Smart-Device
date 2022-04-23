import {Modals} from './modals';

let modals;
const modalElements = document.querySelectorAll('.modal');

const settings = {
  'default': {
    preventDefault: true,
    stopPlay: true,
    lockFocus: true,
    startFocus: true,
    focusBack: true,
    eventTimeout: 400,
    openCallback: false,
    closeCallback: false,
  },
};

const initModals = () => {
  if (!modalElements) {
    return;
  } else {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
    modals = new Modals(settings);
    window.modals = modals;
  }
};

export {modals, initModals};
