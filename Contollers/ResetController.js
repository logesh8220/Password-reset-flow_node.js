const User = require("../Models/UserSchema")
const { encrypt } = require("../Util/HashFunc")
const mailerfunc = require("../Util/Mailer")


const resetControll = async (req,res) =>{
    try {
        let data = await User.findOne({_id:req.body.Id})
        console.log(data)
            if(data.ResetToken == req.body.Token){
                const hashedpassword = await encrypt(req.body.Password);
                console.log(hashedpassword)
                let result = await User.updateOne({Password:hashedpassword})
                let Mailresponse = await mailerfunc.mailerfunc2(data.Email)
                console.log(Mailresponse)
                res.status(200).json({message:"Password reseted successfully"})
            }else{
                res.status(500).json({message:'Somthing wrong in resetting password try again later'})
            }
    } catch (error) {
        res.status(500).json({message:"Somthing went wrong1"})
    }
}
module.exports = resetControll;