const {newExam}=require('./create/create')
const {remove}=require('./delete/delete')
const {readAll,readById}=require('./read/read')
const {update}=require('./update/update')

const examCRUDMethods = (model) => {

    const crudMiddleware={};

    crudMiddleware.create = async (req,res) => {
      await newExam(model,req,res)
    }

    crudMiddleware.remove=async (req,res)=>{
        await remove(model,req,res)
    }

    crudMiddleware.readAll=async (req,res)=>{
        await readAll(model,req,res)
    }

    crudMiddleware.readById=async (req,res)=>{
        await readById(model,req,res)
    }

    crudMiddleware.update=async (req,res)=>{
        await update(model,req,res)
    }


    return crudMiddleware;

}

module.exports={examCRUDMethods}