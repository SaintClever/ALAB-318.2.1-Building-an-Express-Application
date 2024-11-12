import express from 'express';
import ejs from 'ejs';

// __dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
const PORT = process.env.PORT || 3000;


app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log('Server listening on PORT:', PORT);
});