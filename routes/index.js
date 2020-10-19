const express = require('express')
const router = express.Router();
const homeControllers = require('../controllers/home_Controllers')

router.get('/',homeControllers.home);
router.use('/user',require('./user'));
router.use('/post',require('./post'));
router.use('/comment',require('./comment'));






module.exports = router;