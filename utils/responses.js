class SuccesResponse  {
    constructor(data, code = 200){
        this.result = data,
        this.statusCode = code
    }
}

module.exports = {SuccesResponse}