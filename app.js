const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./models/db');
const router = require('./routes/taskRoutes');
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');
const userRoute = require('./routes/userRoute');

// Charger les variables d'environnement
dotenv.config();

// Créer l'application
const app = express();

// Middleware
app.use(logger);
app.use(express.json());
app.use(errorHandler);

// Connexion à MongoDB
connectDB();

// Route
app.get('/', (req, res) => {
  res.send('API Task Manager est en ligne 🚀');
});

app.use('/api/tasks', router);
app.use('/api/users', userRoute);

app.listen(process.env.PORT, () => {
  console.log(`Serveur en cours sur le port ${process.env.PORT}`);
});
