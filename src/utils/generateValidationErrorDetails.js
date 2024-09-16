export const generateValidationErrorsDetails = ({errors})=>{
    console.log(errors)
    const newErrors = errors.map(error=>{
        return {
            path: error.path[0],
            message: error.message
        }
    })
    return newErrors
}