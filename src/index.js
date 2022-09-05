/* eslint-disable no-unused-vars */

const buttonLogIn = document.querySelector('#buttonLogIn');
const buttonLogOut = document.querySelector('#buttonLogOut');

const person = JSON.parse(localStorage.getItem('person'));
// console.log(person);

// buttonLogOut.innerHTML = person.name;

function toggleLogInButton() {
  if (person) {
    buttonLogIn.style.display = 'none';
    buttonLogOut.style.display = 'block';
    buttonLogOut.innerHTML = person.name;
  } else {
    buttonLogOut.style.display = 'none';
    buttonLogIn.style.display = 'block';
  }
}

toggleLogInButton();

buttonLogOut.addEventListener('click', () => {
  localStorage.clear();
});
