const {}=require('./create/create')
const {remove}=require('./delete/delete')
const {readById,readAll}=require('./read/read')
const {update}=require('./update/update')

const feeMiddleware = (model) => {

    let crudHandlers={};

    crudHandlers.remove = async (req,res) => {
      await remove(model,req,res)
    }
    crudHandlers.readById = async (req,res) => {
      await readById(model,req,res)
    }
    crudHandlers.readAll = async (req,res) => {
        await readAll(model,req,res)
    }
    crudHandlers.update = async (req,res) => {
        await update(model,req,res)
    }

    return crudHandlers

}

module.exports=feeMiddleware;