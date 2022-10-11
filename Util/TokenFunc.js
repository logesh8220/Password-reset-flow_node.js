
const jwt = require('jsonwebtoken')
require('dotenv').config()


const CreateToken = async (payload) =>{
    const token = jwt.sign(payload,process.env.SECRET,{expiresIn:"60m",})
    return token
}

const VerifyToken = async (ClintToken)=>{
    const compare = await jwt.verify(ClintToken,process.env.SECRET);
    return compare
}

module.exports = {CreateToken,VerifyToken};