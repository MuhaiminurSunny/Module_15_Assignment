let jwt=require('jsonwebtoken'
)

exports.generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:"10m"
    })
}