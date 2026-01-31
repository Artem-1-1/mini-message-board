import express from 'express';
const app = express();
import indexRoute from './routes/indexRoute.js';

const PORT = process.env.PORT || 3000;
app.listen(PORT);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRoute);

export default app;