import dotenv from 'dotenv';

dotenv.config();

const config = {
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET : process.env.JWT_SECRET
}

if(!config.MONGO_URI) {
  throw new Error('MONGO_URI is not defined');
}

if(!config.JWT_SECRET){
  throw new Error ("JWT_SECRET is not defined")
}

export default config;