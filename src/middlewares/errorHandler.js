import { resError } from "../utils/resError.js";

export function errorHandler(err, req, res, next){
    const {message, code, data} = err
    resError({res, code, message, data})
}