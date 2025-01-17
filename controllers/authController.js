let jwt=require('jsonwebtoken');

exports.getToken=(req,res)=>{
    let token=jwt.sign({id:"12345"},process.env.JWT_SECRET,{
        expiresIn:'10m'
    });
    res.json({token});
}