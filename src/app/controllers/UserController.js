const user = require('../models/user');



class UserController {
    signUp(req, res, next) {
        res.render('user/signup', {csrfToken: req.csrfToken()});
    }
    postLogin(req, res, next){
        
    }
}

module.exports = new UserController();