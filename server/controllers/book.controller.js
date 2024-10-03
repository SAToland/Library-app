import Book from '../models/book.model.js';

export const bookController = {
    createBook: async (req, res) => {
        try {
            const newBook = await Book.create(req.body);
            res.status(201).json(newBook);
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    
    getAllBooks: async (req, res) => {
        try {
            const allBooks = await Book.find();
            res.status(200).json(allBooks);
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    
    getOneBook: async (req, res) => {
        try {
            const foundBook = await Book.findById(req.params.id);
            res.status(200).json(foundBook);
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    
    UpdateOneBook: async (req, res) => {
        const options = {
            new: true,
            runValidators: true
        };
        try {
            const options = {
                new: true,
                runValidators: true
            }
            const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, options);
            res.status(201).json(updatedBook);
        } catch (error) {
            return res.status(500).json(error)
        }
    },
    
    deleteOneBook: async (req, res) => {
        try {
            const deletedBook = await Book.findByIdAndDelete(req.params.id);
            console.log(deletedBook)
            return res.status(204).send()
        } catch (error) {
            return res.status(500).json(error)
        }
    }

}
