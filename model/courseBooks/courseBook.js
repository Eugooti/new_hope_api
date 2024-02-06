const mongoose=require('../../config/db/db')

const bookAttribute=new mongoose.Schema({
    title:{type:String,required:true},
    author:{type:String,required:true},
    subject:{type:String,required:true},
    publisher:{type:String,required:true},
    publicationDate:{type:String,required:true},
})

const courseBook=new mongoose.Schema({
    grade:{type:Number,required:true},
    gradeName:{type:String,required:true},
    books:[bookAttribute],
    createdBy:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model('courseBook',courseBook)