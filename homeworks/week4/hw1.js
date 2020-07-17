/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

request(
  'https://lidemy-book-store.herokuapp.com/books?_limit=10',
  (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err);
    }
    let respond;
    try {
      respond = JSON.parse(body);
    } catch (error) {
      console.log(error);
      return 1;
    }
    for (let i = 0; i < respond.length; i += 1) {
      console.log(respond[i].id, respond[i].name);
    }
    return 0;
  },
);
