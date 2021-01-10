var express = require('express');
var path = require('path');
var app = express();
var apiRouter = require('./routes/api');


// ‘Access-Control-Allow-Methods’代表允許讓設定的Http Method通過。
// ‘Access-Control-Allow-Origin’，其值為’*’，
// 注意，剛剛說Response回傳到Client之前瀏覽器會先檢查這個Header有沒有跟來源Origin的值ㄧ樣，
// 如果是一般前後端分離的sercer這部分的值一般會xxx.com.tw，
// 不會公開。如果你這樣寫，代表大家都可以對你的Server做跨域請求，
// 這邊因為是open API 且是示範性質所以才這樣做。
// let allowCrossDomain = function(req, res, next) {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // next();
// }
// app.use(allowCrossDomain);


app.use(express.static('public'));

app.get('/stock.html', function(request, response){
	response.sendFile(path.resolve(__dirname, 'stock.html'))
});

app.use('/api', apiRouter);

var server = app.listen(8888, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://%s:%s", host, port);
})