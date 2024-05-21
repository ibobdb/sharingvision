const express = require('express');
const app = express();
const PORT = 8080;
const Article = require('./api/article');
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
const cors = require('cors');
const corsOption = {
  origin: ['http://localhost:3000'],
};
app.use(cors(corsOption));
app.use(cors())
app.listen(PORT, () => {
  console.log('Server OK')
})
app.get('/', (req, res) => {
  res.json('Hello');
})
app.get('/article', Article.get);
app.post('/article', Article.post);
app.get('/article/:id', Article.getById);
app.put('/article/:id', Article.update);
app.delete('/article/:id', Article.delete);