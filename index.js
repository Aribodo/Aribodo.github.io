var express =  require('express');
var path = require('path');
var app = express();


app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use('/images' , express.static(path.join(__dirname,'images')))
/*app.use('/plugin' , express.static(path.join(__dirname,'plugin')));
app.use('/js' , express.static(path.join(__dirname,'js'))); */

app.get('/', function(req, res)
{
  res.render('home');
});

app.listen(8080, function(){
  console.log("were listeing");
});
