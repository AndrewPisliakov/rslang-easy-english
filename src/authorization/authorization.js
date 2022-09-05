
window.onload = function () {
  const inputEmail = document.querySelector('#authorizationInputEmail1');
  const inputPassword = document.querySelector('#authorizationInputPassword1');
  const form = document.querySelector('#form');

  const dataForloginUser = {
    email: '',
    password: '',
  };

  const localStorageSetItem = (user) => {
    localStorage.setItem('person', JSON.stringify(user));
  };

  async function loginUser(user) {
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
    } else {
      alert('Incorrect e-mail or password');
    }
    const content = await rawResponse.json();
    window.onstorage = () => { };
    localStorageSetItem(content);
    window.location.href = '../index.html';
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    loginUser(dataForloginUser);
    inputEmail.value = '';
    inputPassword.value = '';
  }

  form.addEventListener('submit', handleFormSubmit);

  inputEmail.addEventListener('change', function () {
    dataForloginUser.email = this.value;
  });

  inputPassword.addEventListener('change', function () {
    if (this.value.length <= 7) {
      alert('введите 8-ми значный код!');
      return;
    }
    dataForloginUser.password = this.value;
  });
};
