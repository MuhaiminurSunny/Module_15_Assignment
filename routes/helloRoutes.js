let express=require('express');
let {getHelloWorld}=require('../controllers/helloController');
let router=express.Router();

router.get('/',getHelloWorld);
module.exports=router;