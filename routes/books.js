'use strict';

const express = require('express');

// const booksInfo = require('../books.js');

// eslint-disable-next-line new-cap
const router = express.Router();
const knex = require('../knex');
const humps = require('humps');

router.get('/books', (req, res, next) => {
  knex('books').orderBy('title').then((data) => {
    let camelData = humps.camelizeKeys(data);
    res.send(camelData);
  })
  .catch((err) => {
    next(err);
  });
});

router.get('/books/:id', (req, res, next) => {
  knex('books').where('id', req.params.id).then((data) => {
    // console.log(data[0]);
    let camelData = humps.camelizeKeys(data[0]);
    res.send(camelData);
  })
  .catch((err) => {
    next(err);
  });
});

router.post('/books', (req, res, next) => {
  let book =  {
    title: req.body.title,
    author: req.body.author,
    genre: req.body.genre,
    description: req.body.description,
    coverUrl: req.body.coverUrl
  };
  let decamelized = humps.decamelizeKeys(book);
  // console.log(decamelized);
  knex('books').insert(decamelized,'*').then((data) => {
    let camelData = humps.camelizeKeys(data);
    res.send(camelData[0]);
  })
  .catch((err) => {
    next(err);
  });
});

router.patch('/books/:id', (req,res,next) => {
  let decamelized = humps.decamelizeKeys(req.body);
    knex('books').where('id', req.params.id).update(decamelized,'*').then((data) => {
    let camelData = humps.camelizeKeys(data[0]);
    res.send(camelData);
  })
  .catch((err) => {
    next(err);
  });
});


router.delete('/books/:id', (req,res,next)=> {
  knex('books').where('id',req.params.id).then((data) => {
  let deleted = {
    title: data[0]['title'],
    author: data[0]['author'],
    genre: data[0]['genre'],
    description: data[0]['description'],
    coverUrl: data[0]['cover_url']
  };

  let camelData = humps.camelizeKeys(deleted)
  res.send(camelData);
  })
  .catch((err)=> {
    next(err);
  });
});

module.exports = router;
