const express = require('express');
const router = express.Router();
//const user = require('../models/user');

//returns user information
router.get("/profile", async (req, res) => {
   // let email = req.params.email;

    //let result = await user.findOne({email: email});
	console.log(result)
    if(result === null) res.send(false);
	else {
		const userInfo = {};
		userInfo.name = result.name;
		userInfo.email = result.email;
		res.send(userInfo);
	}
});

module.exports = router;