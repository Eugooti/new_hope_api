const mongoose=require('../../config/db/db')


const roles=new mongoose.Schema({
    role:{type:String,required:true},
    responsibility:{type:String,required:true}
})

const staffSchema=new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName:{type:String,required:true},
    staffId:{type:String,required:true,unique:true},
    email:{type:String,required:true},
    phone:{type:String,required:true},
    idNumber:{type:String,required:true},
    accountNumber:{type:String,required:true},
    salary:{type:Number,required:true},
    role:[roles],
    password:{type:String,required:true},
    createdBy:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()},

})

module.exports=mongoose.model('Staff',staffSchema);