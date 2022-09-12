const express = require ('express');
const mysql = require ('mysql2');
const cors = require ('cors');


const db = mysql.createPool({
    host: 'mysql_db',
    user: 'MYSQL_USER',
    password: 'MYSQL_PASS',
    database: 'books'
});

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hi there! )');
});

app.get('/api/books/get', (req, res) => {
    const query = 'SELECT * FROM books_reviews';
    db.query(query, (err, result) => {
        res.send(result);
    });
});

app.post('/api/books/add', (req, res) => {
    const   name = req.body.setName,
            review = req.body.review,
            query = `
                INSERT INTO 
                    books_reviews (
                            book_name,
                            book_review
                    ) 
                VALUES (
                    ?,
                    ?
                )
            `;
    db.query(query, [name, review], (err, result) => {
        cocnsole.log(result);
    });
});

app.listen(3001, () => {});