const create=require('./create/create');
const remove=require('./delete/delete')
const {readAll,readById}=require('./read/read')
const update=require('./update/update')

const CRUDMethods = (model) => {
  let crudeMiddleware={};

    crudeMiddleware.create = async (req,res) => {
        await create(model,req,res)
    }

  crudeMiddleware.remove =async (req,res) => {
        await remove(model,req,res)
    }

  crudeMiddleware.readAll= async (req,res) => {
        await readAll(model,req,res)
    }

  crudeMiddleware.readById =async (req,res) => {
        await readById(model,req,res)
    }
  crudeMiddleware.update =async (req,res) => {
        await update(model,req,res)
    }


  return crudeMiddleware;
}

module.exports={CRUDMethods}