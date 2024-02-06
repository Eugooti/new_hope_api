const {addRole}=require("./addRole/addRole")
const {createStaff}=require("./create/create")
const {remove}=require("./delete/delete")
const {readAll,readById}=require("./read/read")
const {update}=require("./update/update")

const StaffMiddleware = (model) => {
    let crudMiddleware={};

    crudMiddleware.addRole=async (req,res)=>{
        await addRole(model,req,res)
    }

    crudMiddleware.createStaff =async (req,res) => {
      await createStaff(model,req,res)
    }
    crudMiddleware.remove =async (req,res) => {
      await remove(model,req,res)
    }
    crudMiddleware.readAll =async (req,res) => {
      await readAll(model,req,res)
    }
    crudMiddleware.readById =async (req,res) => {
      await readById(model,req,res)
    }
    crudMiddleware.update =async (req,res) => {
      await update(model,req,res)
    }

    return crudMiddleware;
}
module.exports= {StaffMiddleware};