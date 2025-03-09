import './src/config/db.config.js';
import app from './app.js';

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.clear();
   console.log(`🚀 Server is running! \n🌍 http://localhost:${PORT}`);
});
