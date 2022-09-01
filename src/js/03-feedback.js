const form = document.querySelector('.feedback-form');
import * as throttle from 'lodash.throttle';

form.addEventListener(
  'input',
  throttle(event => {
    event.preventDefault();
    try {
      const {
        elements: { email, message },
      } = event.currentTarget;
      const inpuUserFeedbackDetails = {
        email: email.value,
        message: message.value,
      };
      localStorage.setItem(
        'feedback-form-state',
        JSON.stringify(inpuUserFeedbackDetails)
      );
    } catch (error) {}
  }, 500)
);

form.addEventListener('submit', event => {
  event.preventDefault();
  if (localStorage.getItem('feedback-form-state') !== null) {
    console.log(localStorage.getItem('feedback-form-state'));
  }

  localStorage.removeItem('feedback-form-state');
  form.reset();
});

const userFeedbackDetailsJSON = localStorage.getItem('feedback-form-state');
const userFeedbackDetails = JSON.parse(userFeedbackDetailsJSON);

try {
  form.email.value = userFeedbackDetails.email;
  form.message.value = userFeedbackDetails.message;
} catch (error) {
  console.log('form not completed');
}
