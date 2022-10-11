const bcrypt = require('bcrypt')


const encrypt = async (normal)=>{
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(normal,salt)
  return hash
};

const decrypt = async (normal,hashed) =>{
    const result  = await bcrypt.compare(normal,hashed);
    return result;
}

module.exports = {encrypt,decrypt};