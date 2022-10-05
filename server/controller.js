const axios = require('axios');

module.exports = {
  getCharacters: (req, res) => {
    if(req.query.secretCode === 'superSecretInfo'){
      axios.get('https://www.breakingbadapi.com/api/characters')
        .then((externalResponse) => res.status(200).send(externalResponse.data))
        .catch(err => console.log(err))
    } else {
      res.status(401).send('please include super secret key');
    }
  },
  login: (req, res) => {
    const {username, password} = req.body;
    const sercetInfo = 'superSecretInfo';
  
    if(username === 'garrett' && password === 'garrett'){
      setTimeout(() => {
        res.status(200).send(sercetInfo);
      }, 2000)
    } else {
      setTimeout(() => {
        res.status(401).send('invalid username or password');
      }, 2000)
    }
  }
}