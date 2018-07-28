var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var db_str = "mongodb://localhost:27017/mydb";
var async = require('async');
//id查询，用来处理主键ID
var ObjectId = require('mongodb').ObjectId;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: req.session.name });
});

//登录
router.get('/login',(req,res)=>{
	res.render('login',{})
})

//账单管理
router.get('/billList',(req,res)=>{
	//数据总条数
	var count = 0;
	//每页展示的数量
	var size = 10;
	
	//总页数
	var page = 0;
	
	//页码
	var pageNum = req.query.pageNum;
	
	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			
			async.series([
				function(callback){
					coll.find({}).toArray((err,data)=>{	//对页码总页数，信息的判断
				//赋值
						count = data.length;
						page = Math.ceil(count/size);
						
						pageNum = pageNum<1?1:pageNum;
						pageNum = pageNum>page?page:pageNum;
						callback(null,'')
				
				})
					
				},
				function(callback){
					
					coll.find({}).sort({_id:-1}).limit(size).skip((pageNum-1)*size).toArray((err,data)=>{
						callback(null,data)
					})
					
				}],
				function(err,data){	//data值的是上面异步处理的函数返回的结果集
						['',data]
						res.render('billList',{list:data[1],page:page,count:count,pageNum:pageNum,size:size,name: req.session.name});
						database.close();
			})
			/*coll.find({}).sort({_id:-1}).toArray((err,data)=>{
				res.render('billList',{name: req.session.name,list:data})
				database.close()
			})*/
		})
	})

})

//添加订单
router.get('/billAdd',(req,res)=>{
	res.render('billAdd',{name: req.session.name})
})

//查看订单
router.get('/billView',(req,res)=>{
	var id = ObjectId(req.query.id);
	console.log(id)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			coll.find({_id:id}).toArray((err,data)=>{
				console.log(data)
				res.render('billView',{name: req.session.name,list:data[0]})
				
				database.close();
			})
		})
	})
	
})


//修改订单
router.get('/billUpdate',(req,res)=>{
	var id = ObjectId(req.query.id);
	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			coll.find({_id:id}).toArray((err,data)=>{
					console.log(data)
				res.render('billUpdate',{name: req.session.name,list:data[0]})	
				database.close();
			})
		})
	})

})

//供应商管理
router.get('/providerList',(req,res)=>{
	//数据总条数
	var count = 0;
	//每页展示的数量
	var size = 10;
	
	//总页数
	var page = 0;
	
	//页码
	var pageNum = req.query.pageNum;
	
	mongodb.connect(db_str,(err,database)=>{
		database.collection('provider',(err,coll)=>{
			
			async.series([
				function(callback){
					coll.find({}).toArray((err,data)=>{	//对页码总页数，信息的判断
				//赋值
						count = data.length;
						page = Math.ceil(count/size);
						
						pageNum = pageNum<1?1:pageNum;
						pageNum = pageNum>page?page:pageNum;
						callback(null,'')
				
				})
					
				},
				function(callback){
					
					coll.find({}).sort({_id:-1}).limit(size).skip((pageNum-1)*size).toArray((err,data)=>{
						callback(null,data)
					})
					
				}],
				function(err,data){	//data值的是上面异步处理的函数返回的结果集
						['',data]
						res.render('providerList',{list:data[1],page:page,count:count,pageNum:pageNum,size:size,name: req.session.name});
						database.close();
			})
			/*coll.find({}).sort({_id:-1}).toArray((err,data)=>{
				res.render('billList',{name: req.session.name,list:data})
				database.close()
			})*/
		})
	})

})

//添加供应商
router.get('/providerAdd',(req,res)=>{
	res.render('providerAdd',{name: req.session.name})
})


//查看供应商

router.get('/providerView',(req,res)=>{
	var id = ObjectId(req.query.id);
	console.log(id)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('provider',(err,coll)=>{
			coll.find({_id:id}).toArray((err,data)=>{
				console.log(data)
				res.render('providerView',{name: req.session.name,list:data[0]})
				
				database.close();
			})
		})
	})
	
})

//修改供应商

router.get('/providerUpdate',(req,res)=>{
	var id = ObjectId(req.query.id);
	mongodb.connect(db_str,(err,database)=>{
		database.collection('provider',(err,coll)=>{
			coll.find({_id:id}).toArray((err,data)=>{
					console.log(data)
				res.render('providerUpdate',{name: req.session.name,list:data[0]})	
				database.close();
			})
		})
	})

})



//用户管理
router.get('/userList',(req,res)=>{
	//数据总条数
	var count = 0;
	//每页展示的数量
	var size = 10;
	
	//总页数
	var page = 0;
	
	//页码
	var pageNum = req.query.pageNum;
	
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			
			async.series([
				function(callback){
					coll.find({}).toArray((err,data)=>{	//对页码总页数，信息的判断
				//赋值
						count = data.length;
						page = Math.ceil(count/size);
						
						pageNum = pageNum<1?1:pageNum;
						pageNum = pageNum>page?page:pageNum;
						callback(null,'')
				
				})
					
				},
				function(callback){
					
					coll.find({}).sort({_id:-1}).limit(size).skip((pageNum-1)*size).toArray((err,data)=>{
						callback(null,data)
					})
					
				}],
				function(err,data){	//data值的是上面异步处理的函数返回的结果集
						['',data]
						res.render('userList',{list:data[1],page:page,count:count,pageNum:pageNum,size:size,name: req.session.name});
						database.close();
			})
		
		})
	})

})

//查看用户

router.get('/userView',(req,res)=>{
	var id = ObjectId(req.query.id);
	console.log(id)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.find({_id:id}).toArray((err,data)=>{
				console.log(data)
				res.render('userView',{name: req.session.name,list:data[0]})
				
				database.close();
			})
		})
	})
	
})

//修改用户

router.get('/userUpdate',(req,res)=>{
	var id = ObjectId(req.query.id);
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.find({_id:id}).toArray((err,data)=>{
					console.log(data)
				res.render('userUpdate',{name: req.session.name,list:data[0]})	
				database.close();
			})
		})
	})
})

//添加用户
router.get('/userAdd',(req,res)=>{
	res.render('userAdd',{name: req.session.name})
})

//密码修改
router.get('/password',(req,res)=>{
	res.render('password',{name: req.session.name,pass:req.session.pass})
	
})

//分页 查询2 
router.get('/search',(req,res)=>{
	console.log(req.query)
	res.send(req.url.split('?')[1]);
})



//分页查询
router.get('/billSearch',(req,res)=>{
	//数据总条数
	var count = 0;
	//每页展示的数量
	var size = 5;
	
	//总页数
	var page = 0;
	
	//页码
	var pageNum = req.query.pageNum;
	
	console.log(req.url)
	
	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			console.log(req.query.billId)
			async.series([
				function(callback){
					coll.find({billId:req.query.billId}).toArray((err,data)=>{	//对页码总页数，信息的判断
				//赋值
						count = data.length;
						page = Math.ceil(count/size);
						
						pageNum = pageNum<1?1:pageNum;
						pageNum = pageNum>page?page:pageNum;
						callback(null,'')
				
				})
					
				},
				function(callback){
					
					coll.find({billId:req.query.billId}).sort({_id:-1}).limit(size).skip((pageNum-1)*size).toArray((err,data)=>{
						callback(null,data)
					})
					
				}],
				function(err,data){	//data值的是上面异步处理的函数返回的结果集
						['',data]
						res.render('billSearch',{list:data[1],page:page,count:count,pageNum:pageNum,size:size,name: req.session.name,lujing:req.url.replace(/\&pageNum.*/,"")});
						
						database.close();
			})
		
		})
	})

})

module.exports = router;
