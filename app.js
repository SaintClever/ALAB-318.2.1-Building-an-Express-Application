import express from 'express';
import pino from 'pino';

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

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extend: true }))
const logger = pino();


// Data
const data = {
  "user": "Saint. Clever",
  "language": "Python",
  "image": "https://avatars.githubusercontent.com/u/8880726?v=4"
}

const visiters = [];

// Routes
app.get('/', (req, res) => {
  // Can exclude .ejs from index.ejs
  res.render('index', data);
});

app.route('/contact')
  .get((req, res) => {
    // Get ejs contact page
    res.render('contact');
  })
  .post((req, res) => {
    console.log(req.body);
    visiters.push(req.body);
    logger.info(visiters);
    res.redirect('/contact');
    // res.send('Post successful ', 201);
  });

app.get('/download', (req, res) => {
  res.download('public/nodejsLogo.png', (err) => {
    logger.info('file downloaded')
  });
});

app.listen(PORT, (err) => {
  if (err) console.error(err);
  logger.info('http://localhost:3000');
  console.log('Server listening on PORT:', PORT);
});