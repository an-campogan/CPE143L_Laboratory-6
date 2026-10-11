const form = document.getElementById('signUpForm');
const firstName = document.getElementById('firstName');
const middleInitial = document.getElementById('middleInitial');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const resetBtn = document.getElementById('resetBtn');

const AlertOverlay = document.getElementById('AlertOverlay');
const alertBtn = document.getElementById('alertBtn');

function showError(input, errorSpan, message) {
  errorSpan.textContent = message;
  input.classList.add('invalid');
  input.classList.remove('valid');
}

function showSuccess(input, errorSpan) {
  errorSpan.textContent = '';
  input.classList.remove('invalid');
  input.classList.add('valid');
}

function isValidEmail(emailStr) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(emailStr.trim());
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  let isValid = true;

  if (firstName.value.trim() === '') {
    showError(firstName, document.getElementById('firstNameError'), 'First Name is required');
    isValid = false;
  } else {
    showSuccess(firstName, document.getElementById('firstNameError'));
  }

  if (middleInitial.value.trim() === '') {
    showError(middleInitial, document.getElementById('middleInitialError'), 'Middle Initial is required');
    isValid = false;
  } else {
    showSuccess(middleInitial, document.getElementById('middleInitialError'));
  }

  if (lastName.value.trim() === '') {
    showError(lastName, document.getElementById('lastNameError'), 'Last Name is required');
    isValid = false;
  } else {
    showSuccess(lastName, document.getElementById('lastNameError'));
  }

  if (email.value.trim() === '') {
    showError(email, document.getElementById('emailError'), 'Email is required');
    isValid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, document.getElementById('emailError'), 'Invalid email format');
    isValid = false;
  } else {
    showSuccess(email, document.getElementById('emailError'));
  }

  if (isValid) {
    AlertOverlay.style.display = 'flex';
  }
});

alertBtn.addEventListener('click', function () {
  AlertOverlay.style.display = 'none';
});

resetBtn.addEventListener('click', function () {
  form.reset();

  const inputs = document.querySelectorAll('input');
  const errors = document.querySelectorAll('.error-msg');

  inputs.forEach(input => {
    input.classList.remove('invalid', 'valid');
  });

  errors.forEach(error => {
    error.textContent = '';
  });
});
