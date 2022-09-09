const form = document.querySelector('.feedback-form');
import * as throttle from 'lodash.throttle';

const feedbackLsKey = 'feedback-form-state';
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
const feedbackDetails = {};
function addInputData() {
  feedbackDetails.email = input.value;
  feedbackDetails.message = textarea.value;
  localStorage.setItem(feedbackLsKey, JSON.stringify(feedbackDetails));
}
form.addEventListener('input', throttle(addInputData, 500));

form.addEventListener('submit', event => {
  event.preventDefault();
  if (
    feedbackDetails.hasOwnProperty('email') &&
    feedbackDetails.hasOwnProperty('message')
  ) {
    console.log(feedbackDetails);
  }
  localStorage.removeItem(feedbackLsKey);
  form.reset();
});

const userFeedbackDetailsJSON = localStorage.getItem(feedbackLsKey);
const userFeedbackDetails = JSON.parse(userFeedbackDetailsJSON);
try {
  form.email.value = userFeedbackDetails.email;
  form.message.value = userFeedbackDetails.message;
} catch (error) {
  console.log('form not completed');
}
