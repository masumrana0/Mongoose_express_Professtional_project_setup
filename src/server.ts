import mongoose from 'mongoose';
import config from './config/index';
import app from './app';

const Run = async () => {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database is connected');
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (error) {
    console.log('something is wrong', error);
  }
};

Run();
