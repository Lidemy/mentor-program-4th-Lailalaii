/* eslint-disable import/no-extraneous-dependencies */
const request = require('request');

const options = {
  url: 'https://api.twitch.tv/kraken/games/top', // kraken v5 版本
  headers: { // 標題要出現的東西
    Accept: 'application/vnd.twitchtv.v5+json', // 為什麼要放這個?
    'Client-ID': 'm2l8w6bhnltwp78yc7rz73w2smp24m',
  },
};

function output(obj) {
  const { viewers, game } = obj;
  const ans = `${viewers} ${game.name}`;
  return ans;
}

function callback(error, response, body) {
  if (error) {
    return console.log(error);
  }
  const info = JSON.parse(body).top;
  for (let i = 0; i < info.length; i += 1) {
    console.log(output(info[i]));
  }
  return 0;
}

request(options, callback);

/* ???
For client IDs created on or after May 31, 2019, the only available
 version of the Kraken API is v5.  For client IDs created prior to
 May 31, 2019, use the application/vnd.twitchtv.v5+json header on
 your requests to access v5 of the Kraken API.
*/
