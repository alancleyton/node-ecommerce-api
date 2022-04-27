import 'reflect-metadata';
import 'dotenv/config';
import expressApplication from '../express/express-application';
import { AppDataSource } from '../typeorm/data-source';

AppDataSource.initialize()
  .then()
  .catch(error => console.log(error));

const { app } = expressApplication;

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`[\x1b[32mserver\x1b[0m] - server is running at: \x1b[36mhttp://localhost:${port}\x1b[0m`);
});
