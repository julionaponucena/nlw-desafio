import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";

export function ensureAdmin (request: Request,response: Response,next:NextFunction){
    const {admin} = request.user

    if(!admin){
        throw new AppError('Unhautohrazed',401)
    }

    return next()
}