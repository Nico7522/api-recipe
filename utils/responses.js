class SuccesResponse  {
    constructor(data, code = 200){
        this.result = data,
        this.statusCode = code
    }
}

class SuccesMultipleResponse  {
    constructor(data, count, code = 200){
        this.results = data,
        this.numberOfRows = count
        this.statusCode = code
    }
}
module.exports = {SuccesResponse, SuccesMultipleResponse}