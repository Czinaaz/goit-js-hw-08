
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageTextarea = form.querySelector('textarea[name="message"]');


function saveFormState() {
    const formData = {
        email: emailInput.value,
        message: messageTextarea.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}


function loadFormState() {
    const savedState = localStorage.getItem('feedback-form-state');
    if (savedState) {
        const formData = JSON.parse(savedState);
        emailInput.value = formData.email;
        messageTextarea.value = formData.message;
    }
}


const saveFormStateThrottled = throttle(saveFormState, 500);

emailInput.addEventListener('input', saveFormStateThrottled);
messageTextarea.addEventListener('input', saveFormStateThrottled);


window.addEventListener('load', loadFormState);


form.addEventListener('submit', function (e) {
    e.preventDefault();
    

    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageTextarea.value = '';

  
    console.log('Email:', emailInput.value);
    console.log('Message:', messageTextarea.value);
});