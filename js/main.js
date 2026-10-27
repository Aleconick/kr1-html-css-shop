const modal = document.querySelector('#orderModal');

document.querySelectorAll('[data-modal-open]').forEach((button) => {
  button.addEventListener('click', () => modal.showModal());
});

document.querySelectorAll('[data-modal-close]').forEach((button) => {
  button.addEventListener('click', () => modal.close());
});