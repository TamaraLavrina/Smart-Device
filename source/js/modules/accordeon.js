const accordButtons = document.querySelectorAll('.footer__title');
const content = document.querySelectorAll('.footer-acc-text');
const headers = document.querySelectorAll('.footer__title');

const accordeonToggle = (evt) => {
  const currentTitle = evt.target.closest('dt');
  const currentContent = currentTitle.nextElementSibling;

  evt.preventDefault();

  if (!currentTitle.classList.contains('footer__title--active')) {
    headers.forEach((item) => {
      item.classList.remove('footer__title--active');
    });
    content.forEach((item) => item.classList.add('visually-hidden'));
    currentTitle.classList.add('footer__title--active');
    currentContent.classList.remove('visually-hidden');
  } else if (currentTitle.classList.contains('footer__title--active')) {
    currentTitle.classList.remove('footer__title--active');
    currentContent.classList.add('visually-hidden');
  }
};

const accordeonInit = () => {
  if (!content) {
    return;
  } else {
    content.forEach((item) => item.classList.add('visually-hidden'));
    accordButtons.forEach((item) => item.addEventListener('click', (evt) => accordeonToggle(evt)));
  }
};

export {accordeonInit};
