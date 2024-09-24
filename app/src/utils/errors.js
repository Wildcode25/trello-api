
    export class CustomizedError extends Error{
        constructor({message, code=500, data=null}){
            super(message)
            this.code = code,
            this.data = data
        }
    }
