const express = require('express');
const sendMail = require('./sendMail')

const app = express();
var port_number = app.listen(process.env.PORT || 3000);
app.listen(port_number);
app.use(express.static('public'));


app.use(express.urlencoded({
    extended:false
}));
app.use(express.json());

app.post('/email',(req,res)=>
{
    console.log(req.body);
    res.json({status:"success"});

    const {_name,_email,_subject,_message} = req.body;

    sendMail(_name,_email,_subject,_message,function(err,data)
    {
        if(err)
        {
            res.status(500).json({message:"Internal Error"});
        }
        else{res.json({message:'Email Sent'})}
    });
});
