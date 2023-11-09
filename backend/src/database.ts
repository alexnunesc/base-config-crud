// database.ts
import mongoose, { ConnectOptions } from 'mongoose';

export default class Database {
  static async connect(): Promise<void> {
    try {
      await mongoose.connect(process.env.MONGO_URL as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions);
      console.log('Connected to MongoDB');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
    }
  }
}
