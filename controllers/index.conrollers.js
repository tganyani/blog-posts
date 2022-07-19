
class IndexControllers {
    homePage(req, res, next) {
        try {
            res.render('home')
        } catch (err) {
            next(err)
        }
    }
    login(req, res, next) {
        try {
            res.render('signIn', { "error": "" })
        } catch (err) {
            next(err)
        }
    }
    signUp(req, res, next) {
        try {
            res.render('signUp', { "error": "" })
        } catch (err) {
            next(err)
        }
    }
    newPost(req, res, next) {
        try {
            res.render('newpost',{message:" "})
        } catch (err) {
            next(err)
        }
    }
    
}


module.exports = IndexControllers


