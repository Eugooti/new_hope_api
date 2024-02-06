const mongoose=require('../../config/db/db')

const activity=new mongoose.Schema({
    activity:{type:String,required:true},
})

const eventsSchema=new mongoose.Schema({
    eventTitle:{type:String,required:true},
    activities:[activity],
    date:{type: String,required: true},
    createdBy:{type:String,required:true},
    createdAt:{type:Date,default:Date.now()}
})

module.exports=mongoose.model('Events',eventsSchema);