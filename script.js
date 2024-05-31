//THIS SCRIPT ESPECIALLY invalid class does not work
const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector('#confirm-password');
const supportingText = document.querySelector('#confirm-password ~ .supporting-text');
confirmPasswordInput.addEventListener('input', () => {
    if (passwordInput.value !== confirmPasswordInput.value) {
        supportingText.textContent = 'Passwords do not match';
        confirmPasswordInput.classList.add('invalid');   
    } 
    else {
        supportingText.textContent = '';
        confirmPasswordInput.classList.remove('invalid');
    }
});
