var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    
    var usernames = ['Me', 'You', 'Them'];
    
    // show the users.ejs view in the browser
    res.render('users', { title: 'Users',
                         users: usernames });
});

module.exports = router;
