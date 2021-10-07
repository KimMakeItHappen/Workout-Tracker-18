const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});