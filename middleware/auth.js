const auth = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Accès refusé: token manquant' });
  }

  next();
};

module.exports = auth;
