const mongoose=require('../../config/db/db')

const timeSpan=new mongoose.Schema({
    Start:{type:String,required:true},
    End:{type:String,required:true},
    activity:{type:String,required:true},
})

const weekDay=new mongoose.Schema({
    day:{type:String,required:true},
    activities:[timeSpan]
})

const timetableSchema=new mongoose.Schema({
    grade:{type:Number,required:true,unique:true},
    gradeName:{type:String,required:true,unique:true},
    weekDay:[weekDay],
    createdBy:{type:String,required:true},
})

module.exports=mongoose.model('TimeTable',timetableSchema)