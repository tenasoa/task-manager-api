exports.checkRole = (requiredRole) => (req, res, next) => {
    const userRole = req.user.role;

    if (!userRole) {
        return res.status(403).json({ message: 'Rôle non spécifié'})
    }

    if (userRole !== requiredRole) {
        return res.status(403).json({message: 'Accès non autorisé'})
    }

    next()
}