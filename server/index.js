const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = 8080;

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const txDBRoute = require('./routes/estateByTXCity');

app.use(cors());
app.use(bodyParser.json());
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/city', txDBRoute);

app.get('/', (req, res) => {
    res.send("/ endpoint");
});

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});