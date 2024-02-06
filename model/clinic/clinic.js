const mongoose=require('../../config/db/db')



const prescription=new mongoose.Schema({
    medicine:{type:String,required:true},
    dosage:{type:String,required:true},
})

const symptom=new mongoose.Schema({
    symptom:{type:String,required:true},
})

const report=new mongoose.Schema({
    symptoms:[symptom],
    prescriptions:[prescription]
})

const clinicSchema=new mongoose.Schema({
    studentsId:{type:Number,required:true},
    studentNames:{type:String,required: true},
    grade:{type:String,required: true},
    gender:{type:String,required:true},
    visit_report:[report],
    createdBy:{type:String,required:true},
    createdAt:{type:String,required:true}

})

module.exports=mongoose.model('clinic',clinicSchema)