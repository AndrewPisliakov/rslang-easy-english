import './style.css';

const createUser = async (user) => {
  const rawResponse = await fetch('https://rs-easy-english.herokuapp.com/users', {
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
};

// eslint-disable-next-line quote-props, quotes
createUser({ "email": "hello@user.com", "password": "Gfhjkm_123" });
