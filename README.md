# Test GitHub × Portainer

Petit site statique servi par Nginx dans Docker.

## Architecture

Mac -> GitHub -> GitHub Actions -> GHCR -> Portainer -> NAS

## Port

Le site est publié sur le port `8090`.

## Variable Portainer

Dans la stack, créer :

`SITE_IMAGE=ghcr.io/VOTRE-UTILISATEUR-GITHUB/NOM-DU-REPO:latest`

Exemple :

`SITE_IMAGE=ghcr.io/maxime/portainer-github-test:latest`
