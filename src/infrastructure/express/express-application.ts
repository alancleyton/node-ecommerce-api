import express from 'express';

class ExpressApplication {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
  }

  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }
}

export default new ExpressApplication();
