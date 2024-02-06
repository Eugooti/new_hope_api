const staffModel=require('../../../model/staff/staff')
const {StaffMiddleware}=require('../../../middleware/staffMiddleware/index')

module.exports=StaffMiddleware(staffModel)