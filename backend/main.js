import './src/config/db.js'
import app from './app.js';

// server listen
app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
});