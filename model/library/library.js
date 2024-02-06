const mongoose=require('../../config/db/db')

const librarySchema=new mongoose.Schema({
    bookTitle:{type:String,required:true},
    author:{type: String,required: true},
    publisher:{type: String,required: true},
    date:{type: String,required: true},
    subject:{type: String,required: true},
    createdBy:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model('library',librarySchema)