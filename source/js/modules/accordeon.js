const accordButtons = document.querySelectorAll('.footer__title');
const content = document.querySelectorAll('.footer-acc-text');


const accordeonToggle = (evt) => {
  evt.preventDefault();
  const title = evt.target.closest('dt');
  title.classList.toggle('footer__title--active');
  const currentContent = title.nextElementSibling;
  currentContent.classList.toggle('visually-hidden');
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
