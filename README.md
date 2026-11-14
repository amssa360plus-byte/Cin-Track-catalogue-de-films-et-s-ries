# Cin-Track-catalogue-de-films-et-s-ries
# 🎬 MV33-MOVIE

Petite application web pour parcourir une liste de films et de séries, les filtrer, les rechercher et sauvegarder ses favoris.

Projet réalisé en **HTML, Tailwind CSS et JavaScript pur** (sans framework).

---

## ✨ Fonctionnalités

- **Affichage dynamique** des films et séries depuis une API JSON (`fetch`).
- **Filtres** : Tout / Movie / TV Show.
- **Recherche** en temps réel par titre (insensible à la casse).
- **Pagination** : 8 films par page, boutons de pages générés automatiquement.
- **Détails** d'un film dans une fenêtre modale (titre, type, année, saisons, réalisateurs).
- **Favoris** : ajout avec le bouton `+`, sans doublons.
- **Suppression** d'un film des favoris.
- **Sauvegarde avec `localStorage`** : les favoris restent après un rafraîchissement.

---

## 🛠️ Technologies

| Technologie | Usage |
|---|---|
| HTML5 | Structure de la page |
| [Tailwind CSS v4](https://tailwindcss.com/) (CDN) | Style |
| [Font Awesome 7](https://fontawesome.com/) (CDN) | Icônes |
| JavaScript (ES6+) | Logique de l'application |

---

## 📁 Structure du projet

```
MV33-MOVIE/
├── index.html        # Structure de la page
├── main-index.js     # Toute la logique JavaScript
├── img/              # Logo, photo de profil, icône favoris
└── README.md
```

---

## 🚀 Lancer le projet

1. Cloner le dépôt :
   ```bash
   git clone <url-du-depot>
   cd MV33-MOVIE
   ```
2. Ouvrir le dossier dans **VS Code**.
3. Lancer **Live Server** (clic droit sur `index.html` → *Open with Live Server*).
4. Ouvrir `http://127.0.0.1:5500/index.html`.

> Une connexion internet est nécessaire (données, Tailwind et Font Awesome sont chargés via CDN).

---

## 📡 Source des données

Les données sont récupérées depuis :

```
https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json
```

Chaque élément du tableau ressemble à :

```json
{
  "title": "Titre",
  "image": "https://...",
  "type": "movie",
  "releaseYear": 2020,
  "seasons": 3,
  "directors": "Nom du réalisateur"
}
```

`type` vaut `"movie"` ou `"series"`.

---

## 🧠 Comment ça marche

### Rendu et état

Toute l'application tourne autour de deux variables :

```js
let list = movies;   // la liste affichée (tout, filtrée ou résultat de recherche)
let page = 1;        // la page courante
```

- `render()` dessine la page courante.
- `setList(newList)` change la liste, revient à la page 1 puis appelle `render()`.

### Pagination

```js
const start = (page - 1) * perPage;
const items = list.slice(start, start + perPage);
const totalPages = Math.ceil(list.length / perPage);
```

### Délégation d'événements

Un seul `addEventListener` par zone (`grid`, `favcard`, pagination), avec `e.target.closest(...)` pour savoir sur quel élément on a cliqué. Cela fonctionne aussi pour les éléments créés dynamiquement.

### Favoris et localStorage

```js
// Lecture au démarrage
let datamovie = JSON.parse(localStorage.getItem("fav")) || [];

// Sauvegarde après chaque modification
localStorage.setItem("fav", JSON.stringify(datamovie));
```

`localStorage` ne stocke que du texte, d'où `JSON.stringify` (écriture) et `JSON.parse` (lecture).

---

## 🐞 Débogage

- Ouvrir la console du navigateur avec **F12**.
- Voir les favoris sauvegardés : **F12 → Application → Local Storage**.
- Réinitialiser les favoris dans la console :
  ```js
  localStorage.removeItem("fav")
  ```

---

## 📚 Ce que j'ai appris

- Récupérer des données avec `fetch` et `async/await`.
- Manipuler le DOM (`querySelector`, `innerHTML`, `classList`).
- Utiliser `map`, `filter`, `slice`, `some`, `join`.
- Gérer les événements avec la délégation (`e.target`, `closest`, `dataset`).
- Construire une pagination.
- Sauvegarder des données avec `localStorage` et `JSON`.
- Gérer les erreurs avec `try / catch`.

---

## 🔮 Améliorations possibles

- Tri par année ou par titre.
- Filtre par année.
- Boutons « Précédent / Suivant » dans la pagination.
- Page de détails dédiée.
- Message « Aucun résultat » quand la recherche est vide.

---

## 👤 Auteur

Projet réalisé par **<jawad amsa>**.
