document.querySelectorAll('div[data-href]').forEach(el => {
  el.classList.add('interactive');
  el.addEventListener('click', () => {
    window.location = el.dataset.href;
  });
});