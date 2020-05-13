const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
var jwt = require('jsonwebtoken');
var baseUrl= 'https://mernheroku195.herokuapp.com';
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sathyaprakash195@gmail.com',
    pass: 'sathyapr123.'
  }
});




router.post('/registeruser', (req, res) => {
  var newuser = new User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    isVerified: false
  });


  // check if email is present or not

  User.find({
    email: req.body.email
  }, (err, docs) => {
    if (err) {
      console.log(`Error: ` + err)
    } else {
      if (docs.length === 0) {
        //  saving the user details to database
        newuser.save(function (err) {
          if (!err) {
            // sending email verification

            let info = transporter.sendMail({
              from: '"MERNCRUD"<sathyaprakash195@gmail.com>',
              to: req.body.email,
              subject: "Verify Your Email",
              text: "Click on the below link to verify your email address and get login access",
              html: '<p><a href="'+baseUrl+'/api/user/verifyemail/'+ req.body.email + '"> This Link</a>click here to verify</p>'
            }, error => {
              if (!error) {
                res.send('1');
              }
              else {
                res.send('email verification failed');
              }
            });

          }
          else {
            res.send('something went wrong');
          }
        })

      } else {
        res.send('Email already exists..please try with another email');
      }
    }
  });







});


router.get('/getusers', (req, res) => {

  User.find({

  }, (err, docs) => {
    if (err) {
      console.log(`Error: ` + err)
    } else {
      if (docs.length === 0) {
        console.log("message")
      } else {
        res.send(docs);
      }
    }
  });

});




router.post('/getuserbyid', (req, res) => {

  User.findById({
    _id: req.body.id
  }, (err, doc) => {
    if (err) {
      console.log(`Error: ` + err)
    } else {
      if (!doc) {
        console.log("message")
      } else {
        res.send(doc);
      }
    }
  });

});

router.post('/updateuserbyid', (req, res) => {

  User.findOneAndUpdate({
    _id: req.body.id
  }, {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  }, (err, doc) => {
    if (err) {
      console.log(`Error: ` + err)
    } else {
      res.send('Data updated successfully');
    }
  });

});

router.post('/deleteuserbyid', (req, res) => {

  User.findOneAndDelete({
    _id: req.body.id
  }, (err, doc) => {
    if (err) {
      console.log(`Error: ` + err)
    } else {
      if (!doc) {
        console.log("message")
      } else {

        res.send('User deleted successfully');

      }
    }
  });

});


router.post('/loginuser', (req, res) => {

    User.findOne({
        email: req.body.email,
        password:req.body.password
    }).then((doc) => {
        if (!doc) {
            res.send('0');
        } else{
            if(doc.isVerified)
            {
              var token = jwt.sign({ email: doc.email,name:doc.name }, 'shhhhh');
              res.send({token:token});
            }
            else{
              res.send('1');
            }
        }
    });

});














router.get('/verifyemail/:email', (req, res) => {
  User.findOneAndUpdate({
    email: req.params.email,
  }, {
    isVerified: true
  }, (err, doc) => {
    if (err) {
      console.log(`Error: ` + err)
    } else {
      res.send('Email verification successfull ' + req.params.email);
    }
  });
});






module.exports = router;