import express from 'express';
import pool from './db/db.js'
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('index');
})

export default app;