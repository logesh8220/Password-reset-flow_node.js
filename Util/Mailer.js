const nodemailer = require('nodemailer')
require('dotenv').config()
const mailerfunc = async (Usermail,Userid,Token) =>{
    try {
        
        const transporter = await nodemailer.createTransport({
           service:"gmail",
           auth:{
               user:process.env.EMAIL,
               pass:process.env.PASS,
           },
           tls: {
            rejectUnauthorized: false
        }
        });
        const mailoptions = {
           from:process.env.EMAIL,
           to:Usermail,
           subject:"Password reset link",
           text:`click here to change you password ---
            ${process.env.CLIENT_URL}/${Userid}/${Token}` 
        }
        const result = await transporter.sendMail(mailoptions);
        return result
    } catch (error) {
        console.log(error,"Error in sending mail")
    }
}
const mailerfunc2 = async (Usermail) =>{
    try {
        
        const transporter = await nodemailer.createTransport({
           service:"gmail",
           auth:{
               user:process.env.EMAIL,
               pass:process.env.PASS,
           },
           tls: {
            rejectUnauthorized: false
        }
        });
        const mailoptions = {
           from:process.env.EMAIL,
           to:Usermail,
           subject:"Password reset",
           text:`${Usermail}Your Password Resetted Succesfully✅` 
        }
        const result = await transporter.sendMail(mailoptions);
        return result
    } catch (error) {
        console.log(error,"Error in sending mail")
    }
}
module.exports = {mailerfunc,mailerfunc2};