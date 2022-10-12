const User = require("../Models/UserSchema")
const mailerfunc = require("../Util/Mailer")


const resetControll = async (req,res) =>{
    try {
        let data = await User.findOne({_id:req.body.Id})
        if(!data){
            res.status(404).json({message:"User not exists"})
        }else{
            if(data.ResetToken == req.body.Token){
                const hashedpassword = await encrypt(req.body.Password);
                let result = await User.updateOne({Password:hashedpassword})
                let Mailresponse = await mailerfunc.mailerfunc2(data.Email)
                console.log(Mailresponse)
                res.status(200).json({message:"Password reseted successfully"})
            }else{
                res.status(500).json({message:'Somthing wrong in resetting password try again later'})
            }
        }
    } catch (error) {
        res.status(500).json({message:"Somthing went wrong"})
    }
}
module.exports = resetControll;