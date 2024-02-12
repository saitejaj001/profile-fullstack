const profileRepo = require('../repo/profile.repo')
const {sendResponse} = require("../utils/apiResponse");
const getAllSkills = async (req, res) => {
    return sendResponse(res, {status: 200, data: await profileRepo.getAllSkills(), message : "Data fetched successfully"})
}

const getAllProjects = async (req, res) => {
    return sendResponse(res, {status: 200, data: await profileRepo.getAllProjects(), message : "Data fetched successfully"})
}

module.exports = {
    getAllSkills,
    getAllProjects
}
