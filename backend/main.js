import { app, PORT } from './app.js';
import './src/config/db.config.js';

app.listen(PORT, () => {
   console.clear();

   console.log(
      `🚀 Server is running! \n🌍 Local: http://localhost:${PORT} \n   Press Ctrl + C to stop the server.`
   );
});
