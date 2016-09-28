var express = require('express')

var app = express()

app.set('port', process.env.PORT || 3000)

// 静态资源
app.use(express.static(__dirname + '/public'))

app.get('/',function(req,res){
  res.send('index')
})

app.get('/index',function(req,res){
  res.sendFile(__dirname + '/views/index.html')
})

app.post('/test', function(req, res) {
    res.json({status:'success',name:req.query.name,password:req.query.password})
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

