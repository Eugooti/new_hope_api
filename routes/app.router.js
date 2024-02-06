const express=require('express')
const {catchErrors}=require('../handlers/errorHandlers')

const courseBookController=require('../controllers/appController/courseBooksController/courseBook.Controller')


const router=express.Router();

router.route('/courseBook/create').post(catchErrors(courseBookController.create))

router.route('/courseBook/readAll').get(catchErrors(courseBookController.readAll))


module.exports=router;