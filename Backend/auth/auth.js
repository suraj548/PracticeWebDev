const passport=require("passport");
const localStrategy=require("passport-local").Strategy
const UserModel = require('../models/user');
const JWTstrategy=require("passport-jwt").Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt;
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
							return done(null,false) //done is a callback  
						}
						if(!duplicateUser){
							const user = await UserModel.create({"name": req.body.name,email, password });
							console.log(user)
							return done(null, user);}
				} catch (error) {
					//console.log(error)
					done(error);
				}
			}
		)
	);

	passport.use(
		'login',
		new localStrategy(
			{
				usernameField:'email',
				passwordField:'password'
			},
			async (email,password,done)=>{
				try{
					const user=await UserModel.findOne({email})
					if(!user){
						return done(null,false,{message:"user doesnot exists"})
					}
					const validate=await user.isValidPassword(password)

					if(!validate){
						return done(null,false,{message:"Wrong Password"})
					}
					return done(null,user,{message:"loged in"})
				}catch(error){
					return done(error)
				}
			}
		)
	);

}

passport.use(
	new JWTstrategy(
		{
		  secretOrKey: 'TOP_SECRET',
		  jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
		},
		async (token, done) => {
		  try {
			return done(null, token.user);
		  } catch (error) {
			done(error);
		  }
		}
	  )
);