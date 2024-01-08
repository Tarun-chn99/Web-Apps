const jwt = require('jsonwebtoken');
const jwt_secret = 'HelloUser';

const fetchUser = (req,res,next) => {
    const token = req.header('auth-token');
    if(!token)
    res.status(401).send({error: "Please authenticate using valid token"});

    try{
        const data = jwt.verify(token,jwt_secret);
        req.id = data.id;
        next();
    }
    catch(error){
        res.status(401).send({error: "Please authenticate using valid token"});
    }

}

module.exports = fetchUser;