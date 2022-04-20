import expressApplication from '../express/express-application';

const { app } = expressApplication;

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[\x1b[32mserver\x1b[0m] - server is running at: \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
