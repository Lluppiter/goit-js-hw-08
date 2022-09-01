const form = document.querySelector('.feedback-form');
import * as throttle from 'lodash.throttle';

form.addEventListener(
  'submit',
  throttle(event => {
    event.preventDefault();
    const {
      elements: { email, message },
    } = event.currentTarget;
    const userFeedbackDetails = {
      email: email.value,
      message: message.value,
    };

    localStorage.setItem(
      'feedback-form-state',
      JSON.stringify(userFeedbackDetails)
    );
    console.log(userFeedbackDetails);
    form.reset();
  }, 500)
);

const userFeedbackDetailsJSON = localStorage.getItem('feedback-form-state');
const userFeedbackDetails = JSON.parse(userFeedbackDetailsJSON);

try {
  form.email.value = userFeedbackDetails.email;
  form.message.value = userFeedbackDetails.message;
} catch (error) {
  console.log('form not completed');
}
