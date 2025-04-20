const express= require('express');
const router = express.Router();
const bookController= require('../controllers/bookController')
const validateBook=require('../middlewares/validateBook')

router.post('/',validateBook,bookController.createBook)
router.get('/',bookController.getAllBooks)
router.get('/:id',bookController.getBookById)


module.exports=router;