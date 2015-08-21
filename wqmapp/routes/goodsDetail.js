var express = require('express');
var router = express.Router();
var goodsD = require('../cdb/goodsD.js');
var goodsInfoD = require('../cdb/goodsInfoD.js');

router.get('/Index.html',function(req, res, next){
	var goods_id = req.query.goods_id;
	//获取goods表数据
	
	goodsD.findByGoodsId(goods_id,function(err,result,fields){
		if(err == null){
			///res.send(result);
		}
	});

	//获取goods_info数据
	goodsInfoD.findByGoodsId(goods_id,function(err,result,fields){
		if(err == null){
			res.send(result);
		}
	});
});

module.exports = router;