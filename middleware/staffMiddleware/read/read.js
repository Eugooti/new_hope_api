const readById = async (Model, req, res) => {
    try {
        // Find document by id
        const result = await Model.findOne({ staffId: req.params.id, removed: false });
        // If no results found, return document not found
        if (!result) {
            return res.status(404).json({
                success: false,
                result: null,
                message: 'No document found by this id: ' + req.params.id,
            });
        } else {
            // Return success response
            return res.status(200).json({
                success: true,
                result,
                message: 'we found this document by this id: ' + req.params.id,
            });
        }
    } catch (error) {
        // Server Error
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }
};

const readAll = async (model,req,res) => {
    try {
        const response=await model.find();

        return res.status(200).json({
            success:true,
            response:response,
        })

    }catch (error) {
        return res.status(500).json({
            success: false,
            result: null,
            message: error.message,
            error: error,
        });
    }
}

module.exports = {readById,readAll};
