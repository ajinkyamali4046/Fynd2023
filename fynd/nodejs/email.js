var nodemailer=require('nodemailer');

var trasnsporter=nodemailer.createTransport({
    service:'gmail',
    auth: {
        user:'youremail@gmail.com',
        pass: 'yourpassword'
    }
});

var mailOptions={
    from:'youremail@gmail.com',
    to:'myfriend@yahoo.com',
    subject:'sending mail using node,js',
    text:'That was easy shit!'
};

trasnsporter.sendMail(mailOptions, function(error, info){
    if(error) 
        {
            console.log(error);
        }
    else{
            console.log('Email sent: '+ info.response);
        }    
    
    
});