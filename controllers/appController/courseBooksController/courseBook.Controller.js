const courseBookModel=require('../../../model/courseBooks/courseBook');
const {CRUDMethods}=require('../../../middleware/CRUDmethods/index')

module.exports=CRUDMethods(courseBookModel)