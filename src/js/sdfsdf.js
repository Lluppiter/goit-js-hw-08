import throttle from 'lodash.throttle';
const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textareaMessage = document.querySelector('textarea');
const FEEDBACK_KEY = 'feedback-form-state';
const formData = {};

function addInputData() {
  formData.email = input.value;
  formData.message = textareaMessage.value;
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}
form.addEventListener('input', throttle(addInputData, 500));
function submit(event) {
  event.preventDefault();
  console.log(formData);
  localStorage.removeItem(FEEDBACK_KEY);
  /* form.reset(); */
}

function saveData() {
  const feedbackData = localStorage.getItem(FEEDBACK_KEY);
  if (feedbackData) {
    const { email, message } = JSON.parse(feedbackData);
    input.value = email;
    textareaMessage.value = message;
  }
}
saveData();
form.addEventListener('submit', submit);
