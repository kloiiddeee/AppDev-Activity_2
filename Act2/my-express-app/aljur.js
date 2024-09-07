const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static('public'));


const indexRoute = require('./routes/index');
const aboutRoute = require('./routes/about');


app.use('/', indexRoute);
app.use('/about', aboutRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});