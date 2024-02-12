const {Schema} = require("mongoose")
const mongoose = require("mongoose")
const ObjectId = Schema.ObjectId;

const skillSchema = new Schema({
    id : ObjectId,
    name : String,
    expertise: String
})
const SkillModel = mongoose.model("skills", skillSchema)

module.exports = SkillModel





