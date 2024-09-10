export function verifyAuthorization(req, res, next){
    if(res.session.user) return next()
    res.status(401).json({message: 'Access declined'})    
}