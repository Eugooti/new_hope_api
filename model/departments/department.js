const mongoose=require('../../config/db/db')

const roles=new mongoose.Schema({
    role:{type: String,required: true},
    responsibility:{type:String,required:true},
})

const departmentSchema=new mongoose.Schema({
    title:{type:String,required:true},
    departmentHead:{type:String,required:true},
    responsibility:[roles],
    createdBy:{type:String,required:true},

})

module.exports=mongoose.model('Department',departmentSchema)