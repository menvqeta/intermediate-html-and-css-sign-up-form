const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector('#confirm-password');
const supportingText = document.querySelector('#confirm-password + supporting-text');

confirmPasswordInput.addEventListener('input', () => {
    console.log('lol');
    if (passwordInput.value !== confirmPasswordInput.value) {
    console.log('Passwords do not match');
    supportingText.textContent = 'Passwords do not match';
  } else {
    supportingText.textContent = '';
  }
});