

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

class errorResponse {
    constructor(message, code) {
        this.message = message,
        this.code = code
    }
}

class CountResponse {
    constructor(count, code = 200){
        this.count = count,
        this.code = code
    }
}
module.exports = {SuccesResponse, SuccesMultipleResponse, CountResponse, errorResponse}