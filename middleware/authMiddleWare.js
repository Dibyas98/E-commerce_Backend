const jwt = require("jsonwebtoken");
const userModel = require("../model/user")

const authMiddleWare =(role)=> async (req,res,next)=>{
    // console.log(process.env.JWT_SECRET_KEY);
    try {
        const data = jwt.verify(req.headers.authorization, 'A545DFDFS15415FDDDF5');
        const payload = jwt.decode(req.headers.authorization);
        const user = await userModel.findById(payload.id);
        if(role.includes(payload.role)){
            req.user = user;
            next();
        }else{
            res.status(403).json({
                success: false,
                message: "Auth Falied"
            })
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = authMiddleWare