var express = require('express');
var router = express.Router();
var Client = require('node-rest-client').Client;
var client = new Client();
/* GET users listing. */
router.get('/stock/:id', function(req, res, next) {
    let queries=req.query
    console.log('query: ', queries);
	let id = req.params.id;
    let url=`https://mis.twse.com.tw/stock/api/getStockInfo.jsp?ex_ch=tse_${id}.tw|otc_${id}.tw&json=1&delay=0`
    
    client.get(url, function (data, response) { 
        res.send(data.toString())
    });
});
module.exports = router;