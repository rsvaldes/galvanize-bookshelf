const booksInfo = require('../books.js');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('books').insert([{
          id:booksInfo[0]['id'],
          title: booksInfo[0]['title'],
          author: booksInfo[0]['author'],
          genre: booksInfo[0]['genre'],
          description: booksInfo[0]['description'],
          cover_url: booksInfo[0]['cover_url'],
          created_at: booksInfo[0]['created_at'],
          updated_at: booksInfo[0]['updated_at']
        },
        {
          id:booksInfo[1]['id'],
          title: booksInfo[1]['title'],
          author: booksInfo[1]['author'],
          genre: booksInfo[1]['genre'],
          description: booksInfo[1]['description'],
          cover_url: booksInfo[1]['cover_url'],
          created_at: booksInfo[1]['created_at'],
          updated_at: booksInfo[1]['updated_at']
        },
        {
          id:booksInfo[2]['id'],
          title: booksInfo[2]['title'],
          author: booksInfo[2]['author'],
          genre: booksInfo[2]['genre'],
          description: booksInfo[2]['description'],
          cover_url: booksInfo[2]['cover_url'],
          created_at: booksInfo[2]['created_at'],
          updated_at: booksInfo[2]['updated_at']
        },
        {
          id:booksInfo[3]['id'],
          title: booksInfo[3]['title'],
          author: booksInfo[3]['author'],
          genre: booksInfo[3]['genre'],
          description: booksInfo[3]['description'],
          cover_url: booksInfo[3]['cover_url'],
          created_at: booksInfo[3]['created_at'],
          updated_at: booksInfo[3]['updated_at']
        },
        {
          id:booksInfo[4]['id'],
          title: booksInfo[4]['title'],
          author: booksInfo[4]['author'],
          genre: booksInfo[4]['genre'],
          description: booksInfo[4]['description'],
          cover_url: booksInfo[4]['cover_url'],
          created_at: booksInfo[4]['created_at'],
          updated_at: booksInfo[4]['updated_at']
        },
        {
          id:booksInfo[5]['id'],
          title: booksInfo[5]['title'],
          author: booksInfo[5]['author'],
          genre: booksInfo[5]['genre'],
          description: booksInfo[5]['description'],
          cover_url: booksInfo[5]['cover_url'],
          created_at: booksInfo[5]['created_at'],
          updated_at: booksInfo[5]['updated_at']
        },
        {
          id:booksInfo[6]['id'],
          title: booksInfo[6]['title'],
          author: booksInfo[6]['author'],
          genre: booksInfo[6]['genre'],
          description: booksInfo[6]['description'],
          cover_url: booksInfo[6]['cover_url'],
          created_at: booksInfo[6]['created_at'],
          updated_at: booksInfo[6]['updated_at']
        },
        {
          id:booksInfo[7]['id'],
          title: booksInfo[7]['title'],
          author: booksInfo[7]['author'],
          genre: booksInfo[7]['genre'],
          description: booksInfo[7]['description'],
          cover_url: booksInfo[7]['cover_url'],
          created_at: booksInfo[7]['created_at'],
          updated_at: booksInfo[7]['updated_at']
        }])
      ])
      .then(function(){
      return knex.raw("SELECT setval('books_id_seq', (SELECT MAX(id) FROM books))")
    })
    });
};
