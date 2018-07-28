var express = require('express');
var router = express.Router();
var mongodb = require('mongodb').MongoClient;
var db_str = "mongodb://localhost:27017/mydb";
//id查询，用来处理主键ID
var ObjectId = require('mongodb').ObjectId;


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//登录
router.post('/login',(req,res)=>{
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.find(req.body).toArray((err,data)=>{
				console.log(data)
				if(data.length > 0){
						req.session.name = data[0].name;
						req.session.pass = data[0].pass;
						//console.log(req.session.name)
						res.send('1');
						database.close();
				}else{
					res.send('2');
					database.close();
				}
			})
		})
	})
})


//修改订单
router.get('/update/billList',(req,res)=>{
	var id = ObjectId(req.query.id);
	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
		coll.find({_id:id}).toArray((err,data)=>{
			//console.log(data[0]._id)
			if(data.length > 0){
				
						res.send(data);
						database.close();
				}else{
					res.send('2');
					database.close();
				}
			})
	
		})
	})
})

//修改订单
router.post('/billUpdate',(req,res)=>{
	var id = ObjectId(req.body.id)

	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			//console.log(id)
			coll.update({_id:id},{$set:req.body},(err)=>{
				
				res.send('1');
				database.close();
			})
		})
	})
})

//查询
router.post('/search',(req,res)=>{
	var bb = req.body.search;
	console.log(bb)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			coll.find({billId:bb}).toArray((err,data)=>{
				res.send(data);
				database.close();
			})
		})
	})
	
})

//查询2 供应商查询
router.post('/search2',(req,res)=>{
	var bbb = req.body.search2;
	console.log(bbb)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('provider',(err,coll)=>{
			coll.find({providerId:bbb}).toArray((err,data)=>{
				res.send(data);
				database.close();
			})
		})
	})
	
})

//查询3 用户查询
router.post('/search3',(req,res)=>{
	var ccc = req.body.search3;
	console.log(ccc)
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.find({name:ccc}).toArray((err,data)=>{
				res.send(data);
				database.close();
			})
		})
	})
	
})

//修改密码
router.post('/password',(req,res)=>{
	var cc = req.body.oldPass;
	var dd = req.body.pass;
	console.log(req.session.name)
	console.log(req.session.pass)
	console.log(cc);
	console.log(dd);
	if(req.session.pass != cc){
		res.send('2')
		}else{
			
			mongodb.connect(db_str,(err,database)=>{
				database.collection('user',(err,coll)=>{
					coll.update({pass:cc},{$set:{pass:dd}},(err)=>{
						res.send('1');
						database.close();
					})
				})
			})
		}
})








//账单管理  添加订单
router.post('/billAdd',(req,res)=>{
	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			coll.insert(req.body,()=>{
				res.send('1');
				database.close();
			})
		})
	})
})

//删除订单
router.get('/del/billList',(req,res)=>{
	var id = ObjectId(req.query.id);

	mongodb.connect(db_str,(err,database)=>{
		database.collection('bill',(err,coll)=>{
			coll.deleteOne({_id:id},(err)=>{
				if(err) throw err;
				
				res.send('1');
				database.close();
			})
		})
	})
})


//添加供应商
router.post('/providerAdd',(req,res)=>{
	mongodb.connect(db_str,(err,database)=>{
		database.collection('provider',(err,coll)=>{
			coll.insert(req.body,()=>{
				res.send('1');
				database.close();
			})
		})
	})
})

//删除供应商

router.get('/del/providerList',(req,res)=>{
	var id = ObjectId(req.query.id);

	mongodb.connect(db_str,(err,database)=>{
		database.collection('provider',(err,coll)=>{
			coll.deleteOne({_id:id},(err)=>{
				if(err) throw err;
				
				res.send('1');
				database.close();
			})
		})
	})
})

//修改供应商

router.post('/providerUpdate',(req,res)=>{
	var id = ObjectId(req.body.id)

	mongodb.connect(db_str,(err,database)=>{
		database.collection('provider',(err,coll)=>{
			console.log(id)
			coll.update({_id:id},{$set:req.body},(err)=>{
				
				res.send('1');
				database.close();
			})
		})
	})
})




//添加用户
router.post('/userAdd',(req,res)=>{
	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.insert(req.body,()=>{
				res.send('1');
				database.close();
			})
		})
	})
})

//删除用户
router.get('/del/userList',(req,res)=>{
	var id = ObjectId(req.query.id);

	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			coll.deleteOne({_id:id},(err)=>{
				if(err) throw err;
				
				res.send('1');
				database.close();
			})
		})
	})
})

//修改用户
router.post('/userUpdate',(req,res)=>{
	var id = ObjectId(req.body.id)

	mongodb.connect(db_str,(err,database)=>{
		database.collection('user',(err,coll)=>{
			console.log(id)
			coll.update({_id:id},{$set:req.body},(err)=>{
				
				res.send('1');
				database.close();
			})
		})
	})
})


module.exports = router;
