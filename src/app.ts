import express, { Application } from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.initializeDBConnection();
  }

  // Set configuration for app.
  private config(): void {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: true }));
  }

  // Initialize initial connection with the database.
  private initializeDBConnection(): void {
    AppDataSource.initialize()
      .then()
      .catch(error => console.log('Error to initialize database connection', error));
  }

  public listen(port: number): void {
    this.app.listen(port, () => {
      console.log(`server is running at: http://localhost:${port}`);
    });
  }
}

export default App;
