const wrapErrorHandler = (fun) =>{
    return async (req, res, next) => {
        try {
            await fun(req, res)
        } catch (err) {
            console.log(err)
        }
    }
}

module.exports = {
    wrapErrorHandler
}
