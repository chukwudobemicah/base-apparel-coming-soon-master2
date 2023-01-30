const errorMessage = document.querySelector('.error-message');
const input = document.querySelector('input');
const form = document.querySelector('form');

const validateEmail = function (email) {
  const regex = /^[a-zA-Z][a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z.]{2,}$/;
  return regex.test(email);
};

const clearErrorMessage = function () {
  return (errorMessage.textContent = '');
};
const addValidMessage = function () {
  errorMessage.textContent = 'Email accepted!';
  errorMessage.style.color = 'green';
};
const checkEmail = function (email) {
  if (email === '' || !validateEmail(email)) {
    console.log(email);
    errorMessage.classList.remove('hidden');
    input.classList.add('input-error');
  } else {
    errorMessage.classList.remove('hidden');
    clearErrorMessage();
    addValidMessage();
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let email = input.value;
  console.log(email);
  checkEmail(email);
});
