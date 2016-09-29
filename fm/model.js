var mongoose = require('mongoose')
var db = mongoose.createConnection('mongodb://<dbuser>:<dbpassword>@ds041506.mlab.com:41506/fmdb')

db.on('error',function(error){
  console.log(error)
})

var mongooseSchema = new mongoose.Schema({
    name : {type : String, default : '匿名用户'},
    password    : {type : String}
});

mongooseSchema.methods.findbyusername = function(name, callback) {
    return this.model('mongoose').find({name: name}, callback);
}

var mongooseModel = db.model('mongoose', mongooseSchema);

var doc = {name : 'emtity_demo_username', password : 'emtity_demo_title'};

var mongooseEntity = new mongooseModel(doc);

mongooseEntity.save(function(error) {
    if(error) {

        console.log(error);
    } else {
        console.log('saved OK!');
    }
    // 关闭数据库链接
    db.close();
});