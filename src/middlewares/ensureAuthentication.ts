import { Request,Response,NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub:string
    email:string,
    admin:boolean
}

export function ensureAuthentication (request:Request,response:Response,next:NextFunction){
    console.log('chegou aqui')
    const authToken = request.headers.authorization
    console.log(authToken)
    if(!authToken){
        throw new AppError('Token is missing',401)
    }

    const token = authToken.split(' ')[1]

    try{
        const {sub,email,admin} = verify(token,"cb321661-79cf-4b28-960c-446332c82036") as IPayload
        request.user= {sub,email,admin}
        return next()
    }

    catch(error){
        throw new AppError('invalid token',401)
    }
}