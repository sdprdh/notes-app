import './src/config/db.js'
import app from './app.js';

const PORT = process.env.PORT || 3000;

// server listen
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});