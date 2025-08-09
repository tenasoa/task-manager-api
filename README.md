
# 📝 Task Manager API

API RESTful construite avec **Node.js**, **Express** et **MongoDB** permettant la gestion de tâches avec un modèle MVC propre et l’utilisation du **Repository Pattern**.

## 🚀 Fonctionnalités

- Création, lecture, mise à jour et suppression de tâches (CRUD complet)
- Gestion des utilisateurs (relation User → Task avec `ObjectId` + `populate`)
- Middleware personnalisés (logger, validation, authentification)
- Gestion des variables d’environnement avec `.env`
- Validation intégrée et personnalisée avec **Mongoose**
- Pagination avec `skip()` et `limit()`
- Indexation MongoDB pour de meilleures performances
- Architecture MVC avec séparation claire des responsabilités
- Repository Pattern pour isoler la couche d’accès aux données
- Gestion centralisée des erreurs
- ESLint + Prettier pour un code propre et uniforme

## 🛠️ Technologies utilisées

- **Node.js**
- **Express.js**
- **MongoDB** (Atlas ou local)
- **Mongoose**
- **dotenv**
- **ESLint** & **Prettier**
- **Nodemon** (dev)

## 📦 Installation

```bash
# Cloner le dépôt
git clone https://github.com/tenasoa/task-manager-api.git

# Se rendre dans le dossier
cd task-manager-api

# Installer les dépendances
npm install

# Créer un fichier .env et y ajouter vos variables (voir section ci-dessous)
````

## ⚙️ Variables d’environnement

Créer un fichier `.env` à la racine avec par exemple :

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
JWT_SECRET=your_secret_key
```

## ▶️ Lancer l’application

```bash
# En développement
npm run dev

# En production
npm start
```

L’API sera disponible sur `http://localhost:3000`.

## 📂 Structure du projet

```
task-manager-api/
│
├── controllers/      # Logique métier
├── middleware/       # Middlewares personnalisés
├── models/           # Schémas Mongoose
├── repositories/     # Accès aux données (Repository Pattern)
├── routes/           # Définition des endpoints API
├── utils/            # Fonctions utilitaires
├── app.js            # Point d’entrée Express
├── package.json
└── .env.example      # Exemple de configuration
```

## 📌 Points à venir / améliorations prévues

* Mesure de performance avec `.explain()`
* Index composés et suppression d’index
* Aggregation pipeline avancée
* Middleware Mongoose (`pre`, `post`)
* Authentification complète avec **JWT** et **bcrypt**
* Soft delete / archivage
* Tests automatisés (unitaires et fonctionnels)

## ✍️ Auteur

[TENASOA Odilon](https://github.com/tenasoa)
