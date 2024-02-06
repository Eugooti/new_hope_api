const model=require('../../../model/fee/feeCategory/feeCategory')
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports=CRUDMethods(model)