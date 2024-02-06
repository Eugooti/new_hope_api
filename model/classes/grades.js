const mongoose=require('../../config/db/db')

const student=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    gender:{type:String,required:true},
})

const gradeSchema=new mongoose.Schema({
    grade:{type:Number,required:true,unique:true},
    gradeName:{type:String,required: true,unique: true},
    classTeacher:{type:String,required:true},
    students:[student]
})

module.exports=mongoose.model('Grade',gradeSchema);