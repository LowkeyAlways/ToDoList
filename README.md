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
- 💾 **Sauvegarde locale (localStorage)** *(optionnel)*  

---

## ⚛️ Points techniques React

- Utilisation de **`useState`** pour la gestion de l’état.  
- Gestion de **listes** et rendu **conditionnel**.  
- Création de **composants réutilisables** :
  - `TaskForm` → formulaire d’ajout  
  - `TaskList` → affichage de la liste  
  - `TaskItem` → élément individuel  