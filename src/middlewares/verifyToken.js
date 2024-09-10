import jwt from 'jsonwebtoken'
export const verifyToken = async (req,res,next)=>{
    res.session = {user: null}
    const token = req.cookies.access_token

    try{
        if(token) {
            res.session.user = jwt.verify(token, process.env.SECRET_KEY)
        }
        next()
    }catch(e){
        console.log(`error verifying token: ${e}`)
    }
}