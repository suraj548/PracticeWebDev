const passport=require("passport");
const localStrategy=require("passport-local").Strategy
const UserModel = require('../models/user');

module.exports = function (passport){
	passport.use(
		'register',
		new localStrategy( 
			{
				usernameField: 'email',
				passwordField: 'password',
		 		session: false,
				passReqToCallback: true
			},
			async (req, email, password, done) => {
				try {
					let duplicateUser = await UserModel.findOne({ email: req.body.email })
                        if(duplicateUser) {
							return done(null,false)
						}
							const user = await UserModel.create({"name": req.body.name,email, password });
							console.log(user)
							return done(null, user);
				} catch (error) {
					//console.log(error)
					done(error);
				}
			}
		)
	);
}