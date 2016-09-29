var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);

app.use(bodyParser.json({limit: '1mb'}));  //body-parser 解析json格式数据
app.use(bodyParser.urlencoded({            //此项必须在 bodyParser.json 下面,为参数编码
  extended: true
}));

app.set('port', process.env.PORT || 3000)



// 存储数据的位置
var dataDir = __dirname + '/data'

// 静态资源
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
  res.send('index')
})

app.get('/index',function(req,res){
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/test', function(req, res) {
    res.json({status:'success',password:12333})
});

app.get('/test/upload', function(req, res) {
    res.sendFile(__dirname + '/views/test/test-upload.html')
});

app.post('/test/upload/add', function(req, res) {
    
    
    var data = req.body
    res.json({status:'success',password:data.password,email:data.email,remember:data.remember})
});


app.use(function(req,res){
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

app.use(function(err,req,res,next){
  console.error(err.stack)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

app.listen(app.get('port'),function(){
  console.log('Express started on http://localhost:' + app.get('port') + ';press Ctrl-C to terminal.')
})

