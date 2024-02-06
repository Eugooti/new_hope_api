const mongoose = require('../../config/db/db');

const student=new mongoose.Schema({
    name: { type: String, required: true },
    maths: { type: Map, of: Number, required: true },
    english: { type: Map, of: Number, required: true },
    kiswahili: { type: Map, of: Number, required: true },
    science: { type: Map, of: Number, required: true },
    home_science: { type: Map, of: Number, required: true },
    physical_health_education: { type: Map, of: Number, required: true },
    CRE: { type: Map, of: Number, required: true },
    social_studies: { type: Map, of: Number, required: true },
    agriculture: { type: Map, of: Number, required: true },
    art_and_craft: { type: Map, of: Number, required: true },
    music: { type: Map, of: Number, required: true },
    total: { type: Number, required: true }, // Change type to Number
    position: { type: Number, required: true }, // Change type to Number
})

const meanScore=new mongoose.Schema({

})


const examSchema = new mongoose.Schema({
    exam_name: { type: String, required: true },
    exam_date: { type: String, required: true },
    grade: { type: String, required: true },
    class_teacher: { type: String, required: true },
    students: [student],
    mean_scores: meanScore,
    createdBy:{type:String,required:true},
    created: { type: Date, default: Date.now },
});

const Exam = mongoose.model('Exam', examSchema);

module.exports = Exam;
