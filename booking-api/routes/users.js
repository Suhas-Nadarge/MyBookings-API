var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')

const userController = require("../app/controller/user.controller");
const User = require("../app/model/models");

/* GET users listing. */
router.post('/login', function(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  console.log(req)
  User.findOne({email:req['body']['email']},function(err, data) {
      if(err){
        res.send({status:'fail'})
      }
      else{
          res.send({status:'success',name:data.name})
          console.log('--'+data)
          
        if(req['body']['password']=== data['password']){
          console.log('Success')
        } else {
          console.log(req['body']['password'],data['password'])
        }
      }
  });  
});

router.post('/bookings', function(req, res) {
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  console.log(req)
  User.findById({email:req['body']['email']},function(err, data) {
      if(err){
        res.send({status:'fail'})
      }
      else{
          res.send(data)
          console.log('--'+data)
      }
  });  
});


router.post('/register', function(req, res, next) {
  console.log('--')
 name = req.body.name,
 email = req.body.email,
 mobile = req.body.mobile,

//  encryptedPassword = await bcrypt.hash(req.body.password, 10)
//  password = encryptedPassword
password =(req.body.password)

let newUser = new User({
  name: name,
  email: email,
  mobile: mobile,
  password: password
 })
 newUser.save().then((user) => {
  // res.send(user)
  res.send({status:'success'})

 }).catch((error) => {
  console.log(error)
 })
});
module.exports = router;
