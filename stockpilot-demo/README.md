# StockPilot — démonstration de gestion de stock

Prototype interactif pour montrer un système de gestion de stock informatique avec emplacements physiques guidés.

## Démonstration
Ouvrir [index.html](./index.html) localement ou accéder à la version GitHub Pages une fois celle-ci activée :

**https://m4ximeg.github.io/portainer-github-test/stockpilot-demo/** (uniquement après activation de Pages)

## Fonctionnalités
- Tableau de bord (quantités, entrées, sorties, emplacements disponibles)
- Plan de dépôt interactif en vue isométrique
- Entrée en stock avec marque/modèle, numéro de série et emplacement conseillé
- Étiquettes imprimables avec code-barres et identifiant unique
- Sortie de stock par identifiant ou scanner USB ; caméra si navigateur compatible HTTPS
- Historique, recherche, export CSV et réinitialisation des données de démonstration
- Interface compatible ordinateur et téléphone

## Important : version de démonstration
Toutes les données sont fictives. Les changements sont enregistrés dans le stockage local du navigateur (localStorage). **Il n'y a pas de base de données serveur, ni de synchronisation entre les appareils.** Le site public ne doit pas être utilisé pour gérer le vrai stock de l'entreprise.

## Activer GitHub Pages
Sur GitHub, dans le dépôt `portainer-github-test` :
1. **Settings → Pages**
2. **Build and deployment → Source : Deploy from a branch**
3. Sélectionner **main** et **/(root)** puis **Save**
4. Ouvrir l'URL ci-dessus après le déploiement

La démonstration est volontairement autonome : aucune installation ni compilation.
