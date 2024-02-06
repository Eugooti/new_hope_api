const libraryModel=require('../../../model/library/library');
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports=CRUDMethods(libraryModel)