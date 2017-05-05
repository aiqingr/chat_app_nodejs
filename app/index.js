'use strict';
const router = require('express').Router();

router.get('/', (req, res, next) => {
  res.render('login');
});

router.get('/info', (req, res, next) => {
  res.send('Test page');
});

router.get('/get', (req, res, next) => {
  res.send('Test page 2');
});

module.exports = {
  router: router
}
