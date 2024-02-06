const addRole = async (model, req, res) => {
    try {
        const {id}=req.params;

        const result=await model.findById(id);

        if (!result){
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No document found by this id: ' + req.params.id,
            });
        }

        const {role}=result;

        role.push(req.body)

        await model.findByIdAndUpdate(result._id,{
            role
        })

        return res.status(200).json({
            success: true,
            message: "Role added successfully"
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

module.exports={addRole}