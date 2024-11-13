import express from 'express';

// __dirname
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


// Express instance
const app = express();
const PORT = process.env.PORT || 3000;


// EJS setup
app.set('views', `${__dirname}/views`);
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/public`));


const data = {
  "user": "Saint. Clever",
  "language": "JavaScript",
  "image": "https://avatars.githubusercontent.com/u/8880726?v=4"
}

app.get('/', (req, res) => {
  // Can exclude .ejs from index.ejs
  res.render('index', data);
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  console.log('Server listening on PORT:', PORT);
});