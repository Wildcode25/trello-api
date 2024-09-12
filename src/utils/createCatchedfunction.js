//Function to remove all the damn try-cacth
export const craeteCatchedFunction = (fn)=>{
    return (req, res, next)=>{
        return fn(req, res).catch(e=>next(e))
    }
  }