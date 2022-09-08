/* eslint-disable no-unused-vars */

const buttonLogIn = document.querySelector('#buttonLogIn');
const buttonLogOut = document.querySelector('#buttonLogOut');
const unauthorized = document.querySelector('#unauthorized');
const authorized = document.querySelector('#authorized');
const footer = document.querySelector('#footer');

const person = JSON.parse(localStorage.getItem('person'));

function toggleLogInButton() {
  if (person) {
    buttonLogIn.style.display = 'none';
    buttonLogOut.style.display = 'block';
    buttonLogOut.innerHTML = person.name;
    unauthorized.style.display = 'none';
    authorized.style.display = 'block';
    footer.style.display = 'block';
  } else {
    buttonLogOut.style.display = 'none';
    buttonLogIn.style.display = 'block';
    unauthorized.style.display = 'block';
    authorized.style.display = 'none';
  }
}

toggleLogInButton();

buttonLogOut.addEventListener('click', () => {
  localStorage.clear();
});

const url = new URL(`${window.location.origin}/src/authorization/authorization.html`);

const queryString = new URLSearchParams(url.search);
queryString.set('returnUrl', `${window.location.toString()}`);
url.search = queryString;
buttonLogIn.href = url.href;
