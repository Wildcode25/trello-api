import { CustomizedError } from "../utils/errors.js"

export function verifyAuthorization(req, res, next){
    if(res.session.user) return next()
    throw new CustomizedError({message:'Session expired', code: 401 }) 
}