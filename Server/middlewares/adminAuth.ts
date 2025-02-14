import {Request,Response, NextFunction } from 'express';
import JWT from 'jsonwebtoken'

const adminAuth = async (req:Request,res:Response,next:NextFunction) => {

    try {
        const {token} = req.headers
        if(!token){
            return res.json({success:false , message:"Not Authorized Login Again"})
       
        }
        const token_decode = JWT.verify(token,process.env.JWT_SECRET) as string;
        if(token_decode !== process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
            return res.json({success:false,message:"Not Authorized Login Again"})
        }
        next()
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}
export default adminAuth