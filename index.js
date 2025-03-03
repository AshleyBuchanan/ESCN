const { prototype } = require('events');
const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;

app.use(methodOverride('__method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('hello from ESCN');
});

app.listen(port, () => {
    console.log(`listening on port${port}.`);
});