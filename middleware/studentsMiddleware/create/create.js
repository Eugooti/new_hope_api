const ClinicStatement=require('../../../model/clinic/clinic')
const attendance=require('../../../model/attendance/attendance')
const feeCollection=require('../../../model/fee/feeCollection/feeCollection')

const createClinicStatement = async (studentsId,studentNames,gender,grade,createdBy) => {
    try {

        const clinicStatement=await new ClinicStatement({
            studentsId,
            studentNames,
            grade,
            gender,
            createdBy,
            visit_report: []
        })

        return clinicStatement.save()

    }catch (error) {
        console.error('Error creating fee statement:', error.message);
        throw error;
    }
}

const createAttendance=async (studentsId,studentNames,grade,gender)=>{
    try {
        const attendanceInstance=await new attendance({
            studentsId,
            studentNames,
            grade,
            gender,
            registers:[]
        })

        return attendanceInstance.save()

    }catch (error) {
        console.error('Error creating fee statement:', error.message);
        throw error;
    }
}

function generateStudentId() {
    // Generate a random number between 1000 and 9999
    return Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
}

const createFeeCollection = async (studentsId,grade)=>{
    try {

        const feeCollectionInstance=await new feeCollection({
            studentsId,
            gradeNumber:grade,
            year:2023,
            total:100,
            term1:{
                total:0,
                charges:[]
            },
            term2:{
                total:0,
                charges:[]
            },
            term3:{
                total:0,
                charges:[]
            },

        })

        return feeCollectionInstance.save()

    }catch (e) {
        console.error('Error creating fee statement:', error.message);
        throw error;
    }

}

const create = async (model,req,res) => {
    try {
        const {first_name, last_name, gender,yob, ups, birth_certificate_no, grade, parents, createdBy} = req.body;
        const studentsId = generateStudentId();
        const studentNames = `${first_name} ${last_name}`;
        const clinicStatement = await createClinicStatement(studentsId, studentNames, grade,gender, createdBy)
        const attendanceStatement=await createAttendance(studentsId,studentNames,grade,gender)
        const result = new model({
            studentsId,
            first_name,
            last_name,
            gender,
            yob,
            ups,
            birth_certificate_no,
            grade,
            parents,
            createdBy
        })
        const saveStudent = await result.save()
        if (saveStudent) {

            if (clinicStatement&&attendanceStatement) {
                return res.status(200).json({
                    success: true,
                    saveStudent,
                    clinicStatement,
                    attendanceStatement
                })

            }
        }
    } catch (error) {
        console.error('Error creating new student:', error.message);
        res.status(500).json({ error: 'Error creating new student: ' + error.message });
    }
}
module.exports={create}