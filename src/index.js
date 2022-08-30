/* eslint-disable no-shadow */
/* eslint-disable quotes */
/* eslint-disable comma-dangle */
/* eslint-disable quote-props */
/* eslint-disable quote-props */
import './style.css';

const inputEmail = document.querySelector('#authorizationInputEmail1');
const inputPassword = document.querySelector('#authorizationInputPassword1');
const form = document.querySelector('#form');
console.log(form);

const user = {
  email: '',
  password: ''
};
// eslint-disable-next-line prefer-arrow-callback
form.addEventListener('submit', function (event) {
  event.preventDefault();
  // eslint-disable-next-line no-use-before-define
  createUser(user);
  inputEmail.value = '';
  inputPassword.value = '';
});

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
  const content = await rawResponse.json();
  console.log(content);
  alert('Ваши данные успешно сохранены');
};

/* export default inputEmail; */

/* async function loginUser(user) {
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
}

loginUser({ "email": "andrew@gmail.com", "password": "11111111" });
*/
