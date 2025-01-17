let jwt=require('jsonwebtoken');
exports.authMiddleware=(req,res,next)=>{
    let token=req.header('Authorization');
    if(!token){
        return res.status(401).json({message:"Access Denied"});
    }
    try{
        let verified=jwt.verify(token,process.env.JWT_SECRET);
        req.user=verified;
        next();
    }
    catch(err){
        res.status(400).json({message:"Invalid Token"});
    }
}