const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    projectId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    projectLead: { type: String, required: true }
});

const Project = mongoose.model('Project', projectSchema);
module.exports = Project;