const User = require("../Models/UserSchema");
const { encrypt } = require("../Util/HashFunc");



const signinControll = async (req,res) =>{
    const {Email,Name,Password} = req.body;
    try {
        const duplicateUser = await User.findOne({Email});
        if(duplicateUser){
            res.status(400).json({Message:"Email Already Exists"})
        
        }
        const hashedpassword = await encrypt(Password);
        const cretedUser = await User.create({
            Email,Name,Password:hashedpassword
        });
        if(cretedUser){
            res.status(200).json({message:"Registerd Successfully"})
        }
    } catch (error) {
        console.log(error,"error")
        res.status(500).json({message:"Error in Regestering User"})
    }
}

module.exports = signinControll;