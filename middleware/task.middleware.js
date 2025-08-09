const formatTitle = (next) => {
    if (this.title) {
        this.title = this.title.trim();
        this.title = this.title.charAt(0).toUpperCase() + this.title.slice(1);
    }
    next();
}

const logCreation = (doc, next) => {
    console.log(`Nouvelle Tâche créé : ${ doc.title }`);
    next();
}

module.exports = {
    formatTitle,
    logCreation,
}