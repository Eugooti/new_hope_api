const mongoose=require('../../../config/db/db');

const feeCategory=new mongoose.Schema({
    item:{type:String,required:true,unique:true},
    frequency:{type:String,required:true},
    cost:{type: Number,required: true}
})
