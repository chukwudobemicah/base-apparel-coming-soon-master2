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
  clearErrorMessage();
  errorMessage.textContent = 'Email accepted!';
  errorMessage.style.color = 'green';
};
const addErrorMessage = function () {
  clearErrorMessage();
  errorMessage.textContent = 'Please provide a valid email';
  errorMessage.style.color = 'red';
};
const checkEmail = function (email) {
  if (email === '' || !validateEmail(email)) {
    errorMessage.classList.remove('hidden');
    addErrorMessage();
    input.classList.toggle('input-error');
  } else {
    errorMessage.classList.remove('hidden');
    addValidMessage();
    input.classList.remove('input-error');
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let email = input.value;
  console.log(email);
  checkEmail(email);
});
// test email : john@gmail.com
