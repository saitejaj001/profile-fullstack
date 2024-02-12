const SkillModel = require("./models/SkillsSchema");
const ProjectModel = require("./models/ProjectSchema");
const profileRepo = require("./index")
const mongoose = require("mongoose")

const getAllSkills = async () => {
    return SkillModel.find()
};

const getAllProjects = async ()=>{
    return ProjectModel.find()
}


module.exports = {
    getAllProjects,
    getAllSkills
}
