import { MongoClient } from 'mongodb';
import { config } from '../config'; 

let client: MongoClient

export const connectDB = async() => {
  try {
    client = new MongoClient(config.MONGO_TOKEN)
    await client.connect()
    console.log('Mongodb connected')
  } catch (error) {
    console.error('🔥 connectDB error:', error);
  }
}

export const getDB = () => client.db(config.DB_NAME)