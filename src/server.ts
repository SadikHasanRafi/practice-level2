import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.dataBaseUrl as string);

    app.listen(config.port, () => {
      console.log(`Example app listening on config.port ${config.port}`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
