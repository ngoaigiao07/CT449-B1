class apiError extends Error{
    constructor(statusCode, massage){
        super();
        this.statusCode = statusCode;
        this.message = this.message;
    }
}

module.exports = apiError;