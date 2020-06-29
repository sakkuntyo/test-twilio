var express = require('express');
var router = express.Router();
const fs = require('fs');
const accountSid = JSON.parse(fs.readFileSync('./settings.json', 'utf8')).twilio_accountSid;
const authToken = JSON.parse(fs.readFileSync('./settings.json', 'utf8')).twilio_authToken;
const twilio = require('twilio');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//toに電話をかける
router.get('/call', (request, response) => {
  var client = twilio(accountSid, authToken);
  client.calls
    .create({
      url: 'http://demo.twilio.com/docs/voice.xml', // 公式が用意したメッセージサンプル
      from: '+9876543210', // twilioのアカウントページに表示される電話番号
      to: '+9876543210'  // 電話を受け取る電話番号
    })
    .then(call => console.log(call.sid));
});

module.exports = router;
