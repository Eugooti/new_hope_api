const mongoose = require('../../config/db/db');

const parentSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    relationship:{ type: String, required: true },
    id_number: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String, required: true },
});

const studentsSchema = new mongoose.Schema({
    studentId: { type: Number, unique: true,required:true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    gender:{type:String,required:true},
    yob: { type: Date, required: true },
    ups: { type: String, unique: true, required: true },
    birth_certificate_no: { type: String, required: true,unique:true },
    grade: { type: Number, required: true },
    parents: [parentSchema],
    createdBy:{type:String,required:true}
});


module.exports = mongoose.model('students', studentsSchema);
