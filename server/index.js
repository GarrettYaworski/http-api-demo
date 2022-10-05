const express = require('express');
const cors = require('cors');
const { getCharacters, login} = require('./controller')

const app = express();
app.use(express.json());
app.use(cors());

//API for pseudo login
app.post('/api/login', login);

//API for getting characters
app.get('/api/characters', getCharacters)


app.listen(4000, () => console.log('listening on port 4000'))
