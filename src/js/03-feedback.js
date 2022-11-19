var throttle = require('lodash.throttle');

const refs = {
  form: document.querySelector('.feedback-form'),
  submitButton: document.querySelector('.feedback-form button'),
  email: document.querySelector('[name = email]'),
  message: document.querySelector('[name = message]'),
};

const checkStorage = () => {
  let item = localStorage.getItem('feedback-form-state');
  if (item === null) {
    console.log('no data in storage');
    return;
  } else {
    refs.email.value = JSON.parse(item).email;
    refs.message.value = JSON.parse(item).message;
  }
};

checkStorage();

// Event handlers

const feedbackData = {
  email: '',
  message: '',
};

const formInputHandler = e => {
  feedbackData.email = refs.email.value;
  feedbackData.message = refs.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
};

const submitHandler = e => {
  e.preventDefault();

  localStorage.removeItem('feedback-form-state');
  refs.email.value = '';
  refs.message.value = '';

  console.log(feedbackData);
};

// Events

refs.form.addEventListener('input', throttle(formInputHandler, 500));
refs.submitButton.addEventListener('click', submitHandler);
