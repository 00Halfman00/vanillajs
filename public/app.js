let modal;
let backdrop;
let card = document.querySelector('.card');
const button = document.querySelector('.btn');

console.log(button);

function showModalHandler() {
  if (modal) {
    return;
  }

  //creating modal

  modal = document.createElement('div');
  modal.className = 'modal';
  const modalText = document.createElement('p');
  modalText.className = 'modal-text';
  modalText.textContent = 'For sure, though?';

  // canceling modal

  const modalCancel = document.createElement('button');
  modalCancel.className = 'modal-cancel';
  modalCancel.textContent = 'cancel';
  modalCancel.addEventListener('click', closeModalHandler);

  // confirm removal of modal

  const modalRemoval = document.createElement('button');
  modalRemoval.className = 'modal-removal';
  modalRemoval.textContent = 'confirm';
  modalRemoval.addEventListener('click', closeModalHandler);

  modal.append(modalText);
  modal.append(modalCancel);
  modal.append(modalRemoval);
  document.body.append(modal);

  backdrop = document.createElement('div');
  backdrop.className = 'backdrop';
  backdrop.addEventListener('click', closeModalHandler);
  document.body.append(backdrop);
}

function removeModalHandler() {
  console.log('confirm');
  card.remove();
  modal.remove();
}

function closeModalHandler() {
  modal.remove();
  modal = null;
  backdrop.remove();
  backdrop = null;
}

button.addEventListener('click', showModalHandler);
