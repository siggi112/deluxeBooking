var express = require('express');
var router = express.Router();
var moment = require('moment');
var nodemailer = require('nodemailer');

router.get('/confirm', function(req, res, next) {
  res.render('confirm', { title: 'Confirm your booking with us'});
});



module.exports = router;
