# 📝 Ma journée productive – To-Do List améliorée

Une petite application de gestion de tâches quotidiennes, pensée pour t’aider à organiser ta journée efficacement.  
Développée en **React (Vite)**, cette To-Do List permet d’ajouter, cocher et supprimer des tâches facilement — avec un design simple et réutilisable.

---

## 🚀 Fonctionnalités

- ➕ **Ajouter** une tâche  
- ✅ **Cocher / décocher** une tâche terminée  
- ❌ **Supprimer** une tâche  
- 🔢 **Compter** le nombre de tâches restantes *(à venir)*  
- 🎯 **Filtrer** les tâches (toutes / faites / à faire) *(à venir)*  
- 💾 **Sauvegarde locale (localStorage)**

---

## ⚛️ Points techniques React

- Utilisation de **`useState`** pour la gestion de l’état.  
- Gestion de **listes** et rendu **conditionnel**.  
- Création de **composants réutilisables** :
  - `TaskForm` → formulaire d’ajout  
  - `TaskList` → affichage de la liste  
  - `TaskItem` → élément individuel

  ## Structure du projet

  ```
ToDoList/
│
├── 📁 node_modules/                 # Dépendances installées par npm
├── 📁 public/                       # Fichiers statiques (favicon, index.html)
│
├── 📁 src/                          # Code source principal
│   │
│   ├── 📁 components/               # Composants réutilisables
│   │   ├── TaskForm.jsx             # Formulaire pour ajouter une tâche
│   │   ├── TaskList.jsx             # Liste des tâches (filtrée)
│   │   └── TaskItem.jsx             # Élément individuel (actions selon le filtre)
│   │
│   ├── 📁 styles/                   # Feuilles de styles personnalisées
│   │   ├── form.css                 # Style du formulaire d’ajout
│   │   └── item.css                 # Style d'un élément individuel
│   │
│   ├── App.jsx                      # Composant principal (logique et affichage global)
│   ├── App.css                      # Styles globaux de l’application
│   └── main.jsx                     # Point d’entrée React (montage dans le DOM)
│
├── .gitignore                       # Fichiers et dossiers ignorés par Git
├── package.json                     # Informations du projet et dépendances
├── package-lock.json                # Version exacte des dépendances installées
├── vite.config.js                   # Configuration de Vite
└── README.md                        # Documentation du projet
  ```