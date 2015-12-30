var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app) {
  
  // routes
  app.get('/', function(req, res) {
    // look for views/index.(view engine) => views/index.ejs
    res.render('index');
  });

  // filling the template
  // http://x.x.x.x:3000/person/test?qstr=blabla
  app.get('/person/:id', function(req, res) {
    res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
  });

  // POST /person gets urlencoded body
  app.post('/person', urlencodedParser, function(req, res) {
    res.send('Thank you!');
    console.log('post: ' + req.body.firstname);
    console.log('post: ' + req.body.lastname);
  });

}
