'use strict';
const http=require('http');
const pug=require('pug');
const server=http.createServer((req,res) => {
  const now=new Date();
  console.info('['+now+'] Requested by '+req.socket.remoteAddress);
  res.writeHead(200, {
    'Content-Type': 'text/html; charse=utf-8'
  });
  switch(req.method) {
    case 'GET':
      if (req.url === '/') {
        res.write('<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>アンケート</title></head><body>' +
          '<h1>アンケートフォーム</h1>' +
          '<a href="/enquetes">アンケート一覧</a>' +
          '</body></html>');
      } else if (req.url === '/enquetes') {
        res.write('<!DOCTYPE html><html lang="ja"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>アンケート</title></head><body>' +
          '<h1>アンケート一覧</h1><ul>' +
          '<li><a href="/enquetes/yaki-shabu">焼き肉・しゃぶしゃぶ</a></li>' +
          '<li><a href="/enquetes/rice-bread">ごはん・パン</a></li>' +
          '<li><a href="/enquetes/sushi-pizza">寿司・ピザ</a></li>' +
          '</ul></body></html>');
      } else if (req.url === '/enquetes/yaki-shabu') {
        res.write(pug.renderFile('./form.pug', {
          path: req.url,
          firstItem: '焼肉',
          secondItem: 'しゃぶしゃぶ'
        }));
      } else if(req.url==='/enquetes/ricebread') {
        res.write(pug.renderFile('./form.pug', {
          path: req.url,
          firstItem: 'ごはん',
          secondItem: 'パン'
        }));
      } else if(req.url==='/enquetes/sushipizza') {
        res.write(pug.renderFile('./form.pug', {
          path: req.url,
          firstItem: '寿司',
          secondItem: 'ピザ'
        }));
      } else
      res.end();
      break;
    case 'POST':
      let rawData='';
      req.on('data', (chunk) => {
        rawData=rawData+chunk;
      }).on('end', () => {
        const decoded=decodeURIComponent(rawData);
        const qs=require('querystring');
        const answer=qs.parse(decoded);
        console.info('['+now+'] 投稿: ' + answer['favorite'] + ' by ' + answer['name']);
        res.write('<!DOCTYOE html><html lang="ja"><head><meta charset="UTF-8"></head><body><h1>' + answer['name'] + 'が' + answer['favorite'] + 'を投稿しました</h1></body></html>');
        res.end();  
      });
      break;
    default:
      break;
  }
})
.on('error', e => {
  console.error('[' + new Date() + '] Server Error/',e);
})
.on('clientError', e => {
  console.error('['+ new Date() + '] Client Error/');
});
const port= process.env.PORT || 8000;
server.listen(port,() => {
  console.log('Listening on ' + port);
});