/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');
const process = require('process');

if (process.argv[2] === 'list') {
  request(
    'https://lidemy-book-store.herokuapp.com/books?_limit=20',
    (err, res, body) => {
      if (err) {
        return console.log('抓取失敗', err);
      }
      let respond;
      try {
        respond = JSON.parse(body);
      } catch (error) {
        console.log(error);
        return 0;
      }
      for (let i = 0; i < respond.length; i += 1) {
        console.log(respond[i].id, respond[i].name);
      }
      return 0;
    },
  );
}

if (process.argv[2] === 'read') {
  request(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (err, response, body) => {
      // console.log(httpResponse.statusCode) // 印出狀態碼
      if (response.statusCode >= 400 && response.statusCode <= 500) {
        return console.log('抓取失敗');
      }
      console.log(JSON.parse(body));
      return 0;
    },
  );
}

if (process.argv[2] === 'delete') {
  request.delete(
    `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
    (response) => {
      if (response.statusCode >= 400 && response.statusCode < 600) {
        return console.log('刪除失敗');
      }
      console.log('刪除成功！');
      return 0;
    },
  );
}
if (process.argv[2] === 'create') {
  request.post(
    {
      url: 'https://lidemy-book-store.herokuapp.com/books',
      form: {
        name: process.argv[3],
      },
    },
    (response) => {
      if (response.statusCode >= 400 && response.statusCode < 600) {
        return console.log('新增失敗');
      }
      console.log('新增成功！');
      return 0;
    },
  );
}

if (process.argv[2] === 'update') {
  request.patch(
    {
      url: `https://lidemy-book-store.herokuapp.com/books/${process.argv[3]}`,
      form: {
        name: process.argv[4],
      },
    },
    (response) => {
      if (response.statusCode >= 400 && response.statusCode < 600) {
        return console.log('更新失敗');
      }
      console.log('更新成功！');
      return 0;
    },
  );
}
