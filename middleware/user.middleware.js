const formatName = (next) => {
        if (this.name) {
            this.name = this.name.trim();
            this.name = this.name.charAt(0).toUpperCase() + this.name.slice(1);
        }
        next();
    }

const logUserCreation = (doc, next) => {
        console.log(`Nouvel utilisateur créé: ${doc.name} (${doc.email})`);
        next();
    }

module.exports = {
    formatName,
    logUserCreation
}