import {Router} from "express";
import {bookController} from '../controllers/book.controller.js'

const router = Router();

router.route("/books")
.get(bookController.getAllBooks)
.post(bookController.createBook)

router.route("/books/:id")
.get(bookController.getOneBook)
.put(bookController.UpdateOneBook)
.delete(bookController.deleteOneBook)

export default router;