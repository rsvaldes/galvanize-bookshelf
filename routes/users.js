'use strict';

const express = require('express');
const bcrypt = require('bcrypt');
const knex = require('../knex');
const humps = require('humps');

const saltRounds = 10;
const myPlaintextPassword = 'ilikebigcats';
// const someOtherPlaintextPassword = 'not_bacon';

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/users',(req,res,next) => {
  console.log('before',req.body.password);
  req.body.password = bcrypt.hashSync(req.body.password,saltRounds);
  console.log('after',req.body.password);
  knex('users').insert({
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    email: req.body.email,
    hashed_password: req.body.password
  }).returning(['id','first_name','last_name','email']).then((data) => {
    let camelData = humps.camelizeKeys(data[0]);
    res.send(camelData);
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
