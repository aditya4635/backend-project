class ApiError extends Error{
    constructor(
        statusCode,
        message='Something went wrong',
        errors=[],
        stack=""
    ){
        super(message)
        this.tatusCode=statusCode
        this.data=null
        this.message=message
        this.success=false;
        this.errors=errors

        if(stack){
            this.stack=stack 
        } else{
            error.captureStadkTrace(this,this.constructor)
        }
    }
}

export { ApiError}