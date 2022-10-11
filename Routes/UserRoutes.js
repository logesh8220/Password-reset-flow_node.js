
const express = require('express');
const forgotControll = require('../Contollers/ForgotController');
const loginControll = require('../Contollers/LoginController');
const resetControll = require('../Contollers/ResetController');
const signinControll = require('../Contollers/SigninController');
const router = express.Router()


router.get('/',(req,res) =>{
    res.json("User")
});

router.post('/signin',signinControll);
router.post('/login',loginControll)
router.post('/forgot',forgotControll)
router.post('/reset',resetControll)

module.exports = router;