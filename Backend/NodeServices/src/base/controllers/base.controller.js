const createResponse = require('../../data-trans-objects/response');
const createRequest = require('../../data-trans-objects/resquest');
const statusCodes = require('../../consts/http-status');

module.exports = class BaseController {

    get statusCodes() {
        return statusCodes;
    }

    createRequest(request = { }) {
        return createRequest(request);
    }

    createResponse(status, isSuccess, data = null, message = null) {
        return createResponse(status, isSuccess, data, message);
    }
}