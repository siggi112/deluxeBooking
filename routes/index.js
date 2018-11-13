const express = require('express');
const router = express.Router();
const moment = require('moment');
const nodemailer = require('nodemailer');
const Booking = require('../models/booking');

escapeRegex = function (str) {
  return (str+'').replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
};

// GET single Booking
router.get('/:id', function(req, res, next) {


      const id = req.params.id;
      console.log("Look for "+ id);

      Booking.findOne({ phonenumber : id }, function(err, booking){
          if(err){
               console.log(err);

           } else {



                       res.render('confirm', { title: 'Confirm your booking with us', booking: booking, moment: moment});


               }


        });


});

//The 404 Route (ALWAYS Keep this as the last route)
router.get('*', function(req, res){
  res.render('404', { title: 'Page not found'});
});



module.exports = router;
