import 'reflect-metadata';
import 'dotenv/config';
import App from './app';

const app = new App();

app.listen(process.env.PORT || 3000);
