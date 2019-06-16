var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('posts, respond with a resource');
});

//

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
