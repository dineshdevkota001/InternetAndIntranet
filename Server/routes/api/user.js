var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken')
const { secret, withAuth } = require('../../authentication')
// needs authentication
const bcrypt = require('bcrypt')
const saltRounds = 10
const { addUser, isUserValid, validate_user } = require('../../database/databaseapi')

const tokenize = (res,userid, returnobj = {}) => {
    const payload = {userid: userid }
    const token = jwt.sign(payload, secret, {
        expiresIn: '10d'
    });
    res.cookie('token', token, { expires: new Date(Date.now() + 900000), httpOnly: true, secure: true }).status(200).send(returnobj)
}

// routes from here
router.get('/', withAuth, (req, res) => {
    if (req.userid) res.status(200).send(true)
    else res.send(false)
})

router.post('/login',(req, res) => {
    validate_user(req.body.username).then(databaseResponse=>{
        bcrypt.compare(req.body.password, databaseResponse.password, (err,result)=>{
            if (result) tokenize(res, databaseResponse._id, result)
            else res.send(false)
        })
    }
    )
})

router.get('/check/:username',(req, res) => {
    isUserValid(req.params.username).then(isValid => {
        return res.send(isValid)
    })
})

router.post('/signup', (req, res) => {
    let { body } = req
    let signupdetails = { username: body.username, email: body.email }
    bcrypt.hash(req.body.password, saltRounds,
        function (err, hashedPassword) {
            signupdetails.password=hashedPassword
            addUser(signupdetails).then(returnobj => { tokenize(res, returnobj._id, returnobj)})
        }
    );
    
})
module.exports = router;
