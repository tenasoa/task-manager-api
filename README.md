# 📝 Task Manager API

[![Node.js](https://img.shields.io/badge/Node.js-18.x-green?logo=node.js)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-lightgrey?logo=express)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-6.x-green?logo=mongodb)](https://www.mongodb.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Build Status](https://img.shields.io/github/actions/workflow/status/tenasoa/task-manager-api/node.js.yml?branch=main)](https://github.com/tenasoa/task-manager-api/actions)

API RESTful construite avec **Node.js**, **Express** et **MongoDB** permettant la gestion de tâches avec un modèle MVC propre et l’utilisation du **Repository Pattern**.

---

## 📑 Table des matières

1. [Fonctionnalités](#-fonctionnalités)
2. [Technologies utilisées](#️-technologies-utilisées)
3. [Installation](#-installation)
4. [Variables d’environnement](#-variables-denvironnement)
5. [Lancer l’application](#️-lancer-lapplication)
6. [Structure du projet](#-structure-du-projet)
7. [Endpoints API](#-endpoints-api)
8. [Tests](#-tests)
9. [Améliorations prévues](#-points-à-venir--améliorations-prévues)
10. [Auteur](#️-auteur)
11. [Licence](#-licence)

---

## 🚀 Fonctionnalités

- CRUD complet pour la gestion des tâches
- Relation **User → Task** avec `ObjectId` + `populate`
- Middleware personnalisés (logger, validation, authentification)
- Validation intégrée et personnalisée avec **Mongoose**
- Pagination avec `skip()` et `limit()`
- Indexation MongoDB
- Architecture MVC + **Repository Pattern**
- Gestion centralisée des erreurs
- Code propre avec **ESLint** + **Prettier**

---

## 🛠️ Technologies utilisées

- **Node.js**  
- **Express.js**  
- **MongoDB** + **Mongoose**  
- **dotenv**  
- **Nodemon** (dev)  
- **ESLint** & **Prettier**  

---

## 📦 Installation

```bash
# Cloner le dépôt
git clone https://github.com/tenasoa/task-manager-api.git

# Se rendre dans le dossier
cd task-manager-api

# Installer les dépendances
npm install

# Créer un fichier .env (voir ci-dessous)
````

---

## ⚙️ Variables d’environnement

Créer un fichier `.env` à la racine avec :

```env
PORT=3000
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>
JWT_SECRET=your_secret_key
```

---

## ▶️ Lancer l’application

```bash
# En développement
npm run dev

# En production
npm start
```

L’API sera accessible sur `http://localhost:3000`.

---

## 📂 Structure du projet

```
task-manager-api/
│
├── controllers/      # Logique métier
├── middleware/       # Middlewares personnalisés
├── models/           # Schémas Mongoose
├── repositories/     # Accès aux données (Repository Pattern)
├── routes/           # Définition des endpoints
├── utils/            # Fonctions utilitaires
├── app.js            # Point d’entrée Express
├── package.json
└── .env.example      # Exemple de config
```

---

## 📡 Endpoints API

### 🔹 Tâches

**Créer une tâche**

```bash
curl -X POST http://localhost:3000/api/tasks \
-H "Content-Type: application/json" \
-d '{"title": "Ma première tâche", "description": "Détails ici"}'
```

**Lister toutes les tâches**

```bash
curl -X GET http://localhost:3000/api/tasks
```

**Obtenir une tâche par ID**

```bash
curl -X GET http://localhost:3000/api/tasks/<id>
```

**Mettre à jour une tâche**

```bash
curl -X PUT http://localhost:3000/api/tasks/<id> \
-H "Content-Type: application/json" \
-d '{"title": "Titre mis à jour"}'
```

**Supprimer une tâche**

```bash
curl -X DELETE http://localhost:3000/api/tasks/<id>
```

---

## 🧪 Tests

Pour lancer les tests automatisés :

```bash
npm test
```

---

## 📌 Points à venir / améliorations prévues

* Mesure de performance avec `.explain()`
* Index composés et suppression d’index
* Aggregation pipeline avancée
* Middleware Mongoose (`pre`, `post`)
* Authentification JWT + bcrypt
* Soft delete / archivage
* Tests unitaires et fonctionnels

---

## ✍️ Auteur

[TENASOA Odilon](https://github.com/tenasoa)

---

## 📜 Licence

Ce projet est sous licence **MIT** — voir le fichier [LICENSE](LICENSE) pour plus de détails.
