import express from 'express';
const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
})