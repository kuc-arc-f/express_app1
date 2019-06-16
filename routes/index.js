var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res,next) {
    res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/about', function(req, res,next) {
    res.render('about', { title: 'About' });
});

/* userlist htmlページを作成 */
router.get('/userlist', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
//console.log("#doc");
//console.log(docs[0] );
        res.render('userlist', {
            "userlist" : docs
        });
    });
});

function com_resHeader(res, param){
    res.header('Content-Type', 'application/json; charset=utf-8')
    res.send(param);
}
/* userlist htmlページを作成 */
router.get('/api_user', function(req, res) {
    var db = req.db;
    var collection = db.get('usercollection');
    collection.find({},{},function(e,docs){
//console.log("#doc");
    var param = {"docs": docs };
//        res.header('Content-Type', 'application/json; charset=utf-8')
//        res.send(param);
        com_resHeader(res, param);
//console.log(docs[0] );
    });
});

module.exports = router;
