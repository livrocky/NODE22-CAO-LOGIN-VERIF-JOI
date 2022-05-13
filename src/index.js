const express = require('express');
const cors = require('cors');
const { PORT } = require('./config');

const auth = require('./routes/auth');
const content = require('./routes/content');

const app = express();

app.use(express.json());
app.use(cors());

app.use('/auth', auth);
app.use('/v1/content', content);

app.get('/', (req, res) => {
  res.send({ msg: 'Server is running' });
});

app.all('*', (req, res) => {
  res.status(400).send({ error: 'Page not found' });
});

app.listen(PORT, () => console.log('Listening on port', PORT));
