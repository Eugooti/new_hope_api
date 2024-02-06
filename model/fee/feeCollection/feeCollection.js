const mongoose=require('../../../config/db/db');

const charge=new mongoose.Schema({
    category:{type:String,required:true},
    cost:{type:Number,required:true}
})

const feeCollection=new mongoose.Schema({
    studentId:{type:Number,required:true,unique:true},
    gradeNumber:{type:Number,required: true},
    year:{type:Number,required:true},
    total:{type:Number,required:true},
    term1:{
        total:{type:Number,required: true},
        charges:[charge]
    },
    term2:{
        total:{type:Number,required: true},
        charges:[charge]
    },
    term3:{
        total:{type:Number,required: true},
        charges:[charge]
    }
})

module.exports=mongoose.model('feeCollection',feeCollection);