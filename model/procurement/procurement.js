const mongoose=require('../../config/db/db')

const procurementSchema=new mongoose.Schema({
    item:{type:String,required:true},
    use:{type: String,required: true},
    cost:{type:Number,required:true},
    department:{type:String,required:true},
    user:{type:String,required:true},
    createdBy:{type:String,required:true},

})

module.exports=mongoose.model('Procurement',procurementSchema)