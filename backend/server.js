const express = require('express');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const taskRoutes = require('./routes/taskRoutes');
const { errorHandler } = require('./middlewares/errorMiddleware');
const morgan = require('morgan')

dotenv.config(); 

connectDb();

const app = express();
app.use(express.json()); // Parse incoming JSON
app.use(morgan('dev'));

app.use('/api/tasks', taskRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
