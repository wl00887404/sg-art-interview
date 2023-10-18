import Express from 'express';
const PORT = 3001;

const app = Express();

app.get('/api', (_req, res) => {
  res.send({ hello: 'world' });
});

app.listen(3001, function () {
  console.log(`Server is on http://localhost:${PORT}/api`);
});
