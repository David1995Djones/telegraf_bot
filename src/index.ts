import { bot } from "./bot/bot";
import { startServer } from "./server/express";
import { connectDB } from "./mongo/db";

const bootstrap = async () => {
    try {
      console.log('📦 Starting bootstrap...');
      await connectDB()
      console.log('✅ MongoDB connected!');
      startServer()
      console.log('🌐 Express server started');
      bot.launch()
      console.log('🤖 Bot launched');
    } catch (error) {
      console.error('🔥 Bootstrap error:', error);
    }
}

bootstrap()

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));