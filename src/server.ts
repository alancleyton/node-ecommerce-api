import express from 'express';

const port = 3000;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send({ msg: 'Hello World' });
});

app.listen(port, () => {
  console.log(`[\x1b[32mserver\x1b[0m] - server is running at: \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
