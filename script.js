const cheerUpButton = document.getElementById('cheer-up-button');
const cheerUpMessage = document.getElementById('cheer-up-message');

cheerUpButton.addEventListener('click', () => {
  cheerUpMessage.classList.toggle('hidden');
});
