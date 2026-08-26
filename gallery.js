(() => {
  'use strict';

  const triggers = Array.from(document.querySelectorAll('.screenshot-open'));
  const dialog = document.getElementById('screenshot-lightbox');

  if (!triggers.length || !dialog || typeof dialog.showModal !== 'function') return;

  const image = dialog.querySelector('.lightbox-image');
  const caption = dialog.querySelector('.lightbox-caption');
  const count = dialog.querySelector('.lightbox-count');
  const closeButton = dialog.querySelector('.lightbox-close');
  const previousButton = dialog.querySelector('.lightbox-prev');
  const nextButton = dialog.querySelector('.lightbox-next');

  const slides = triggers.map((trigger) => {
    const thumbnail = trigger.querySelector('img');
    const figure = trigger.closest('figure');
    const figcaption = figure ? figure.querySelector('figcaption') : null;
    return {
      src: thumbnail ? thumbnail.getAttribute('src') : '',
      alt: thumbnail ? thumbnail.getAttribute('alt') || '' : '',
      caption: figcaption ? figcaption.textContent.trim() : ''
    };
  });

  let currentIndex = 0;
  let returnFocus = null;

  const render = (index) => {
    currentIndex = (index + slides.length) % slides.length;
    const slide = slides[currentIndex];
    image.src = slide.src;
    image.alt = slide.alt;
    caption.textContent = slide.caption;
    count.textContent = `${currentIndex + 1} of ${slides.length}`;
  };

  const open = (index, trigger) => {
    returnFocus = trigger;
    render(index);
    dialog.showModal();
    closeButton.focus();
  };

  const close = () => {
    if (dialog.open) dialog.close();
  };

  triggers.forEach((trigger, index) => {
    trigger.addEventListener('click', () => open(index, trigger));
  });

  closeButton.addEventListener('click', close);
  previousButton.addEventListener('click', () => render(currentIndex - 1));
  nextButton.addEventListener('click', () => render(currentIndex + 1));

  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      render(currentIndex - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      render(currentIndex + 1);
    }
  });

  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    const inside = event.clientX >= rect.left && event.clientX <= rect.right &&
      event.clientY >= rect.top && event.clientY <= rect.bottom;
    if (!inside) close();
  });

  dialog.addEventListener('close', () => {
    if (returnFocus && typeof returnFocus.focus === 'function') returnFocus.focus();
    returnFocus = null;
  });
})();
