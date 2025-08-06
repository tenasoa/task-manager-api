const validateTask = (req, res, next) => {
  const { title } = req.body;
  if (!title || typeof title !== 'string' || title.trim().length === 0) {
    return res.status(400).json({
      message:
        '"Le champ \'title\' est requis et doit être une chaîne non vide."',
    });
  }
  next();
};

module.exports = validateTask;
