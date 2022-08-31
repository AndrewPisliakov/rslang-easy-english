/* eslint-disable no-use-before-define */
/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quote-props */
import './style.css';

const inputEmail = document.querySelector('#authorizationInputEmail1');
const inputPassword = document.querySelector('#authorizationInputPassword1');
const form = document.querySelector('#form');

const user = {
  email: '',
  password: ''
};
// eslint-disable-next-line prefer-arrow-callback
form.addEventListener('submit', handleFormSubmit);

async function handleFormSubmit(event) {
  event.preventDefault();
  // eslint-disable-next-line no-use-before-define
  // await createUser(user);
  await loginUser(user);
  inputEmail.value = '';
  inputPassword.value = '';
}

inputEmail.addEventListener('change', function () {
  user.email = this.value;
});

inputPassword.addEventListener('change', function () {
  if (this.value.length <= 7) {
    alert('введите 8-ми значный код!');
    return;
  }
  user.password = this.value;
});

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
  console.log(rawResponse);
  const { status } = rawResponse;
  const content = await rawResponse.json();
  console.log(content);

  if (status === 200) {
    alert('Ваши данные дабавлены');
  } else {
    const arrErrors = content.error.errors;
    let str = '';
    // eslint-disable-next-line no-return-assign
    arrErrors.forEach((elem) => str += `${elem.message} \n `);
    alert(str);
  }
};

// createUser({ "email": "first@gmai.com", "password": "11111111" });

const loginUser = async (user) => {
  const rawResponse = await fetch('https://rslang-easy-english-be.herokuapp.com/signin', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  const content = await rawResponse.json();

  console.log(content);
  console.log(content.token);
};

// loginUser({ "email": "first@gmai.com", "password": "11111111" });
