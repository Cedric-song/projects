var User = require('./user.js');

function insert(){
	var user = new User({
    email : 'kengmun@126.com',                 //用户账号
    password: '123456'                       //密码
   });

	user.save(function (err,res){
		if(err){
			console.log("Error:" + err)
		}else{
			debugger
			console.log("Res:" + res)
		}
	})
}

insert()