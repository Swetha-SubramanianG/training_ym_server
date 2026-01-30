export const isAdmin=async(req,resizeBy,next)=>{
    if(req.user.role!=="admin"){
        return res.status(401).json({message:"admin access only"}) 
       }
       next()
}