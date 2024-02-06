const eventModel=require('../../../model/events/events');
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports=CRUDMethods(eventModel)