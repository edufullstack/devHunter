const express = require('express')
const { login, register, getProfile } = require('../controllers')
const router = express.Router()

router.get('/login', async (req,res)=>{
try {
  const {email, password} = req.query
  const userInfo = await login(email,password)
  res.status(200).send(userInfo)
} catch (error) {
 res.status(404).json({ error: error.message });
}
})

router.get('/profile', async (req,res)=>{
try {
  const {email, password} = req.query
  const userInfo = await getProfile(email,password)
  res.status(200).send(userInfo)
} catch (error) {
 res.status(404).json({ error: error.message });
}
})


router.post('/register', async (req,res)=>{
try {
  const {name, email, password} = req.body
  const registered = await register(name,password, email)
  res.status(200).send('User Registered')
} catch (error) {
 res.status(404).json({ error: error.message });
}
})


module.exports = router