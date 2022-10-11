const User = require("../Models/UserSchema")
const { decrypt } = require("../Util/HashFunc")
const { CreateToken } = require("../Util/TokenFunc")


const loginControll = async (req, res) => {
    try {
        const { Email, Password } = req.body
        let data = await User.findOne({ Email: Email })
        if (data) {

            let compare = await decrypt(Password, data.Password)
            if (compare) {
                let Token = await CreateToken({_id:data._id})
                res.json({Token,message:"Login Successful"})
                
            } else {
                res.status(404).json({ message: "Username/password is wrong" })
            }
        }else{
            res.status(404).json({message:"Email not exists"})
        }
    } catch (error) {
      console.log(error)
      res.status(400).json({message:"Error in User login"})
    }
}
module.exports = loginControll