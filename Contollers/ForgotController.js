
const User = require("../Models/UserSchema")
const mailerfunc = require("../Util/Mailer")
const { CreateToken } = require("../Util/TokenFunc")


const forgotControll = async (req,res) =>{
    try {
        let data = await User.findOne({Email:req.body.Email})
        
        if(!data){
            res.status(404).json({message:"User not exists"})
        }
        else{
            let ResetToken = await CreateToken({_id:data._id})
            await User.updateOne({ResetToken:ResetToken})
            let Mailresponse = await mailerfunc(data.Email,data._id,ResetToken)
            console.log(Mailresponse,"Email reseponse")
            res.json({message:"Password Reset link sended to email"})
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Somthing went wrong"})
    }
}
module.exports = forgotControll;