var express = require('express');
var nodemailer = require('nodemailer');
var DBinstance = require('../models/index.js');
var model=require('../models/table.js');
var router = express.Router();
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "crickInstaStart@gmail.com",
        pass: "7507228194"
    }
});
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//=================login
router.get('/sendPassword', function(req, res, next) {
         var mailOptions={
               to : req.query.to,
               subject : req.query.subject,
               text : req.query.text
          }
       console.log(mailOptions);
       smtpTransport.sendMail(mailOptions, function(error, response){
              if(error){   
                   console.log(error);
                   res.end("error");
              }else{
                   console.log("Message sent: " + response.message);
                   res.end("sent");
             }
        });
});
//==============register
router.post('/saveRegistrationDetail', function(req, res, next) {
    const data={
		name:"fbfdfddfgfdfdfsdgdfg",
        email:"fgdfgdf",
        password:1245
   	}
       console.log("hello inside post");
  DBinstance.query("insert into userdetail (id , uname,email,password) values (DEFAULT,?,?,?)", { replacements: [data.name,data.email,data.password], type: DBinstance.QueryTypes.INSERT }).then(function(){
		res.send({
			success:true,
			message:"successfully save the data"
		});
	});

});
module.exports = router;
