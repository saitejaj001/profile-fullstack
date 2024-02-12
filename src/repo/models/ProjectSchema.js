const {Schema} = require("mongoose")
const mongoose = require("mongoose")
const ObjectId = Schema.ObjectId;

const projectSchema = new Schema({
    id : ObjectId,
    imageUrl : String,
    title: String,
    description : String,
    link : String
})

const ProjectModel = mongoose.model("projects", projectSchema)

module.exports = ProjectModel
