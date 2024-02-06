const mongoose=require('../../config/db/db')

const register=new mongoose.Schema({
    date:{type:Date,default:Date.now()},
    present:{type:Boolean,required:true},
})

const attendanceSchema=new mongoose.Schema({
    studentId:{type:Number,required: true},
    studentNames:{type:String,required:true},
    grade:{type:Number,required:true},
    gender:{type:String,required:true},
    registers:[register]
})

module.exports=mongoose.model('attendance',attendanceSchema);