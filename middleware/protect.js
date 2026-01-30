import jwt from 'jsonwebtoken'
export const protect=async (req,res,next)=>{
    const authHeader=req.header.authorization
    if(!authHeader||authHeader.startWith("Bearer"))
    {
        return res.status(401).json({message:"unAuthorized"})
    }
    const token=authHeader.split(",")[1];
    try{
        const decode=jwt.verify(token,process.env.JWT_TOKEN)
    }catch{
        return res.status(401).json({message:"invalid token"})

    }


}