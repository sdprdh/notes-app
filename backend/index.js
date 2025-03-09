import app from './app.js';
import './src/config/db.config.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`🚀 Server is running! \n🌍 http://localhost:${PORT} `);
});
