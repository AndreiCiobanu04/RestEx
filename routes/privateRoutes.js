const jwt = require('jsonwebtoken')


function auth (req, res, next) {
const token = req.header('authorization');

if(!token) return res.status(401).send('Access Denied');

// if token exists we verify it
try{
const verified = jwt.verify(token, 'secret');
req.user = verified;
next();

}catch(err){
    res.status(400).send('Invalid token')

}

}

module.exports = auth