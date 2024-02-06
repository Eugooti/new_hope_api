const procurementModel=require('../../../model/procurement/procurement');
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports=CRUDMethods(procurementModel)