var jwt=require('jsonwebtoken')

function verifyToken(req, res, next) {
   
    if (!req.headers.authorization)
      return res.status(403).send({ auth: false, message: 'No token provided.' });
    
    let token = req.headers.authorization.split(' ')[1]
   
    if(token==='null')
        return res.send('Unauthorized User')

    jwt.verify(token, 'TOP_SECRET', function(err, decoded) {
      if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
        
      // if everything good, save to request for use in other routes
      req.userId = decoded.user;
      next();
    });
  }
  module.exports=verifyToken;