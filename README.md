# renovate-bot-azure-devops
Self-hosting RenovateBot Azure DevOps 

## Permissions
Renovate a besoin de droit d'accès pour pouvoir créer des Pull Requests sur les projets.

Aller sur la page https://dev.azure.com/{organizationName}/{projectName}/_settings/repositories?repoGroup=true&_a=security 
et donner des droits sur `Contribute`, `Contribute to pull requests` et `Create branch` pour l'utilisateur `"Project Collection Build Service ({organizationName})"`.

## Create pipeline
Le fichier `azure-pipeline.yaml` dans le repertoire utilise la configuration par defaut.

Dans le menu de gauche, choisir `Pipelines`, cliquer sur `New pipeline` dans le coin de droite. 
Suivre le wizard pour localiser le repository, choisir "Existing Azure Pipelines YAML file" et choisir `/azure-pipeline.yaml` dans la combobox `Path`.

Pour finir `Run` dans le coin droit.

## Next steps
Définir la configuration dans chaque [repository](https://docs.renovatebot.com/configuration-options/) et dans le [pipeline](https://docs.renovatebot.com/self-hosted-configuration/)
