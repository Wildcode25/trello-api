export const resError = ({res, code, message, data})=>{
    return res.status(code).json({
        error: true,
        message,
        data
    })
}