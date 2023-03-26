import { throttle } from 'lodash';

// Пошук елементів на сторінці
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
const LOCALSTORAGE_KEY = 'feedback-form-state'; 

form.addEventListener(
  'input',
  throttle(e => {
    const toSave = { email: email.value, message: message.value };
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(toSave));
  }, 500)
);

form.addEventListener('submit', e => {
  e.preventDefault(); 
  if (email.value === '' || message.value === '') {
    return alert('Заповніть всі поля!');
  }

  console.log({ email: email.value, message: message.value });
  form.reset(); 
  localStorage.removeItem(LOCALSTORAGE_KEY);
});

const load = key => {
    const state = localStorage.getItem(key); 
    return state === null ? undefined : JSON.parse(state);
};

const storageData = load(LOCALSTORAGE_KEY);
if (storageData) {
  email.value = storageData.email;
  message.value = storageData.message;
} 