const express = require('express');
const path = require('path');
const app = express();

app.set('port', 3333);


app.use(express.static(path.join(__dirname, '../public')));

app.get('/restaurants/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
  }
);

app.get('/restaurants/:id/googlereviews', (req, res) => {
  const { id } = req.params
  res.redirect(`http://localhost:3003/api/restaurants/${id}/googlereviews`);
  }
);

app.get('/restaurants/:id/photos', (req, res) => {
  const { id } = req.params
  res.redirect(`http://localhost:3000/api/restaurants/${id}/photos`);
  }
);

app.get('/restaurants/:id/reviews', (req, res) => {
  const { id } = req.params
  res.redirect(`http://localhost:3001/api/restaurants/${id}/reviews`);
  }
);

app.get('/restaurants/:id/info', (req, res) => {
  const { id } = req.params
  res.redirect(`http://localhost:3002/api/restaurants/${id}/info`);
  }
);

app.listen(3333, () => console.log('Listening on', app.get('port')));