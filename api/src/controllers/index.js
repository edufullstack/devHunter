const {User} = require('../db')
const bcryptjs = require('bcryptjs')


const login=async (email,password)=>{
try {
  const hash = await User.findOne({
    where:{email},
    attributes:['password'],
  });

  if(hash){
    let compare = await bcryptjs.compare(password, hash.dataValues.password)
    if(compare){
      let findUser = await User.findOne({
        where:{email},
      })
      if(findUser){

        return findUser
      }
    }else{
      throw new Error('Incorrect data, please try again')
    }
  }else{throw new Error('Incorrect data, please try again')}
  
} catch (error) {
  throw new Error(error.message)
}
}

const getProfile=async (email,password)=>{
  try {
    
    const hash = await User.findOne({
      where:{email},
      attributes:['password'],
    });
  
    if(hash){
      let compare = await bcryptjs.compare(password, hash.dataValues.password)
      if(compare){
        let findUser = await User.findOne({
          where:{email},
        })
        return findUser
      }else{
        throw new Error('Incorrect data, please try again')
      }
    }else{throw new Error('Incorrect data, please try again')}
    
    
  } catch (error) {
    throw new Error(error.message)
  }
}

const register= async (name,password, email)=>{
  try {
    let user = await User.findOne({
      where: { email } 
    });

    if (user) {
      throw new Error('User already registered')
    }

    let hash = await bcryptjs.hash(password,8);
    let addUser = await User.create({
      name,
      email,
      password: hash
    })
    return addUser
  } catch (error) {
    throw new Error(error.message)
  }
}


module.exports={
  login,
  getProfile,
  register
}