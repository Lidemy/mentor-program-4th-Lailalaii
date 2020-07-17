/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');
const process = require('process');

if (!process.argv[2]) {
  console.log('請輸入國家名稱');
}

function search(obj) {
  const cur = obj.currencies;
  const ans = `============
國家：${obj.name}
首都：${obj.capital}
貨幣：${cur[0].code}
國碼：${obj.callingCodes}`;
  return ans;
}

request(
  `https://restcountries.eu/rest/v2/name/${process.argv[2]}c?fields=name;capital;currencies;callingCodes`,
  (error, response, body) => {
    if (error) {
      return console.log('抓取失敗', error);
    }
    while (response.statusCode >= 400 && response.statusCode < 500) {
      return console.log('找不到國家資訊');
    }
    for (let i = 0; i < JSON.parse(body).length; i += 1) {
      console.log(search(JSON.parse(body)[i]));
    }
    return 0;
  },
);

/*
Output
國家：Taiwan JSON.parse(body)[i].name
首都：Taipei JSON.parse(body)[i].capital
貨幣：TWD
國碼：886 JSON.parse(body)[i].callingCodes
*/
