import express from 'express';
import { config } from '../config';


export  const startServer = () => {
  const app = express()

  app.use(express.json())

  app.get('/', (_, res) => {
    res.send('✅ Express server is running!');
  })
  
  app.listen(config.PORT, () => {
    console.log(`🚀 Server running on port ${config.PORT}`);
  })

}