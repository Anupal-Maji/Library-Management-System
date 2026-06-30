const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Mock database using an Array
const booksDatabase = [
    { id: 1, title: "Introduction to Algorithms", author: "Cormen", status: "Available" },
    { id: 2, title: "Clean Code", author: "Robert Martin", status: "Borrowed" },
    { id: 3, title: "The Pragmatic Programmer", author: "Andrew Hunt", status: "Available" }
];

// API Endpoint to search books
app.get('/api/books', (req, res) => {
    const search = req.query.search || "";
    const filteredBooks = booksDatabase.filter(book => 
        book.title.toLowerCase().includes(search.toLowerCase())
    );
    res.json(filteredBooks);
});

app.listen(PORT, () => {
    console.log(`Backend server running at http://localhost:${PORT}`);
});
