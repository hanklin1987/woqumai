var mysql = require('./factory.js').mysql;

var goodsD = {};
goodsD.findByGoodsId = function (goods_id,callback){
	mysql.query('select * from meiren_goods_tbl where goods_id='+goods_id,function(err,res,fields){
		callback(err,res,fields);
	});
}
module.exports = goodsD;
