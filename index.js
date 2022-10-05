const formElement = document.querySelector('form');

const characterContainer = document.querySelector('.characters');

formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  // const username = document.querySelector('.username').value;
  // const password = document.querySelector('.password').value;
  // const body = { username, password };

  const formData = document.querySelectorAll('.login-form-input');
  const body = {};
  for(let i = 0; i<formData.length; i++){
    body[formData[i].name] = formData[i].value;
  }

  const errFunc = (err) => {
    const errorTextNode = document.createElement('div');
    errorTextNode.textContent = err.response.data;
    document.querySelector('body').appendChild(errorTextNode);
  }

  axios.post('http://localhost:4000/api/login', body)
  .then((loginRes) =>  {
    axios.get(`http://localhost:4000/api/characters?secretCode=${loginRes.data}`)
    .then(charRes => {
      charRes.data.forEach((char) => {
        const characterNode = document.createElement('li');
        characterNode.textContent = char.name;
        characterContainer.appendChild(characterNode);
      })
    }).catch(errFunc)
  })
  .catch(errFunc)
})