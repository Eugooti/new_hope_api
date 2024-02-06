const addRecord = async (model,req,res) => {
    try {
        const { studentId } = req.params;

        const response=await model.findOne({studentId});

        if (!response){
            return res.status(404).json({
                success: false,
                result: null,
                message: 'Record not found.',
            });
        }

        const {visit_report}=response

        visit_report.push(req.body)

        await model.findByIdAndUpdate(response._id,{
            visit_report
        });

        return res.status(200).json({
            success: true,
            message: "Record added successfully"
        })

    }catch (error) {

        // If error is thrown by Mongoose due to required validations
        if (error.name === 'ValidationError') {
            return res.status(400).json({
                success: false,
                result: null,
                message: 'Required fields are not supplied',
                error: error,
            });
        } else {
            // Server Error
            return res.status(500).json({
                success: false,
                result: null,
                message: error.message,
                error: error,
            });
        }
    }

}

module.exports={addRecord}