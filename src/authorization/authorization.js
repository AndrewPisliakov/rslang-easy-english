/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
import user from '../state/state_user';

window.onload = function () {
  const inputEmail = document.querySelector('#authorizationInputEmail1');
  const inputPassword = document.querySelector('#authorizationInputPassword1');
  const form = document.querySelector('#form');

  const localStorageSetItem = (user) => {
    localStorage.setItem('person', JSON.stringify(user));
  };

  const loginUser = async (user) => {
    const rawResponse = await fetch('https://rslang-easy-english-be.herokuapp.com/signin', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const { status } = await rawResponse;
    if (status === 200) {
      alert('Залогировались');
      // makeEmptyUserValue(user);
      // console.log(user);
      window.location.href = 'index.html';
    } else {
      alert('Incorrect e-mail or password');
    }
    const content = await rawResponse.json();
    console.log(content);

    user.token = content.token;
    user.id = content.userId;
    user.name = content.name;

    localStorageSetItem(user);
  };
  // loginUser({ "email": "first@gmai.com", "password": "11111111" });

  function handleFormSubmit(event) {
    event.preventDefault();
    loginUser(user);
    inputEmail.value = '';
    inputPassword.value = '';
  }

  form.addEventListener('submit', handleFormSubmit);

  inputEmail.addEventListener('change', function () {
    user.email = this.value;
    console.log(this.value);
  });

  inputPassword.addEventListener('change', function () {
    if (this.value.length <= 7) {
      alert('введите 8-ми значный код!');
      return;
    }
    user.password = this.value;
    console.log(this.value);
  });
};
