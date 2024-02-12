const isSuccess = (status) =>{
    return status>=200 && status < 400
}

const sendResponse = (res, {status, data, message}) =>{
    return res.send({isSuccess : isSuccess(status), data:data, message:message})
}

module.exports = {
    sendResponse
}
