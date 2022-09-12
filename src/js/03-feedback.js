const form = document.querySelector('.feedback-form');
import * as throttle from 'lodash.throttle';

const feedbackLsKey = 'feedback-form-state';
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const feedbackDetails = JSON.parse(localStorage.getItem(feedbackLsKey)) || {};

function addInputData() {
  feedbackDetails.email = input.value;
  feedbackDetails.message = textarea.value;
  localStorage.setItem(feedbackLsKey, JSON.stringify(feedbackDetails));
}
form.addEventListener('input', throttle(addInputData, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  if (Object.keys(feedbackDetails).length > 0) {
    console.log(feedbackDetails);
  }
  localStorage.removeItem(feedbackLsKey);
  form.reset();
});

function addLsDatainInput() {
  if (localStorage.getItem(feedbackLsKey)) {
    input.value = feedbackDetails.email;
    textarea.value = feedbackDetails.message;
  }
}
addLsDatainInput();
