/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */

import user from '../state/state_user';

window.onload = () => {
  const inputRegistrationName = document.querySelector('#registrationInputName');
  const inputRegistrationEmail = document.querySelector('#registrationInputEmail');
  const inputRegistrationPassword = document.querySelector('#registrationInputPassword');
  const formRegistration = document.querySelector('#formRegistration');
  const dataForCreateUser = {
    name: '',
    email: '',
    password: '',
  };

  const createUser = async (user) => {
    const rawResponse = await fetch('https://rslang-easy-english-be.herokuapp.com/users', {
      method: 'POST',
      headers: {
        // eslint-disable-next-line quote-props
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });
    const { status } = rawResponse;
    const content = await rawResponse.json();
    console.log(content);

    if (status === 200) {
      alert('Ваши данные дабавлены');
      makeUserEmptyValue(dataForCreateUser);
      console.log(dataForCreateUser);
      window.location.href = 'authorization.html';
    } else {
      const arrErrors = content.error.errors;
      let str = '';
      // eslint-disable-next-line no-return-assign
      arrErrors.forEach((elem) => str += `${elem.message} \n `);
      alert(str);
    }
  };

  function handleFormRegistrationSubmit(event) {
    event.preventDefault();
    createUser(dataForCreateUser);
    // showUser(user);
    inputRegistrationName.value = '';
    inputRegistrationEmail.value = '';
    inputRegistrationPassword.value = '';
  }

  formRegistration.addEventListener('submit', handleFormRegistrationSubmit);

  inputRegistrationName.addEventListener('change', function () {
    dataForCreateUser.name = this.value;
  });

  inputRegistrationEmail.addEventListener('change', function () {
    dataForCreateUser.email = this.value;
  });

  inputRegistrationPassword.addEventListener('change', function () {
    if (this.value.length <= 7) {
      alert('введите 8-ми значный код!');
      return;
    }
    dataForCreateUser.password = this.value;
  });
};

function makeUserEmptyValue(user) {
  // eslint-disable-next-line no-restricted-syntax, guard-for-in
  for (const key in user) {
    user[key] = '';
  }
}
