'use strict';
const express = require('express');
const app = express();

app.set('port', process.env.PORT || 3000);
//the ejs default recognize the views folder, but we can also change
//the folder name if we want, and if we are not, we can ignore the the following
//app.set('views', './views');
app.use(express.static('public'));
app.set('view engine', 'ejs');



app.get('/', (req, res, next) => {
  //res.send('<h1>Hello Express</h1>');
  //res.sendfile(__dirname + '/views/login.html');
  res.render('login');
});

app.get('/dashboard', (req, res, next) => {
  res.send('<h1>This is the dashboard page!' + req.hello + '</h1>');
});

app.listen(app.get('port'), () => {
  console.log('Chatapp running on the port 3000');
});
