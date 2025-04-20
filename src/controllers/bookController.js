const { json } = require("express");

const books = [];
let currentId = 1

//create book 
exports.createBook = (req, res) => {
    // Check if the array already has 3 books
    if (books.length >= 3) {
        return res.status(400).json({ message: 'Cannot add more than 3 books' });
    }

    const { title, author, publishedYear } = req.body;

    const book = { id: currentId++, title, author, publishedYear };
    books.push(book);

    res.status(201).json(book);
};

//Get all books with optional search

exports.getAllBooks = (req, res) => {
    const { search } = req.query;
    if (search) {
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase())
        );
        return res.json(filteredBooks);
    }

    res.json(books)
}

//get book by id

exports.getBookById = (req, res) => {
    const book = books.find((b) => {
        return b.id === parseInt(req.params.id)
    });
    if (!book) return res.status(404).send('book not found');
    res.json(book);
}

