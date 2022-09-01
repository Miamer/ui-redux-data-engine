# UI React redux Typescript

Créer une app de type Dashboard utilisant React redux en Typescript permettant au sein d’un fomulaire de mettre à jour 2 graphiques ainsi qu’un tableau de données.

## Explication

Toutes les données du dashboard font référence à un lieu précis, que l’utilisateur renseigne dans le champs “city” ex : “London, UK” . Le champs “Date” permet d’indiquer une date de référence sur laquelle va être en partie basé les résultats des 2 graphiques.

Le **premier graphique** présentera la courbe d’évolution des températures pour la même date sur différentes années. ex: 01/01/2000 - 01/01/2001 - 01/01/2002- …

L’utilisateur spécifie la plage des années via la scroll bare horizontale

Le **deuxième graphique** présentera les températures maximales et minimales jour par jour sur le  mois passé de référence.

Enfin nous trouverons un **tableau** des prévisions météo pouvant aller de 3 à 15 jour pour notre lieu de référence.

## Réalisation

Ici l’utilisation de redux et plus particulièrement de Reduxtoolkit n’est pas une nécéssité mais plus une démonstration. L’application comporte quelques components,  il n’existe donc pas de problématique de props-drilling.

Nous rechechons à utiliser des fonctionnalités classiques et avancées de redux comme : 
- le Reducer via createSlice()
- les RTQ Query

L’application disposera de 4 components:
- Form
- CurveTemperatureByYear
- BarTemperatureMinMax
- ArrayOfForcastWeather

Aucun des components ne passerra de props entre eux, seul le store redux permettra l’echange d’action et d’informations.

Afin de facilité une présentation rapide Mui sera utilisé.

## Installation du projet

[Installer git si ce n’est pas fait](https://git-scm.com/downloads)
[Installer node si ce n’est pas déja fait](https://git-scm.com/downloads)

1. Ouvrir une invite de commande et cloner le répertoire
    
    ```bash
    git clone https://github.com/Miamer/ui-redux-data-engine.git
    ```
    
2. Se rendre dans le répertoire
    
    ```bash
    cd ui-redux-data-engine
    ```
    
3. Installer les dépendances
    
    ```bash
    npm install
    ```
    
4. Insérer votre clé API founis par [www.visualcrossing.com](http://www.visualcrossing.com) dans le fichier .env.distrib :

    ```bash
    REACT_APP_APIKEY=votre_clé_API_ici
    ```

## Api

Les données sont fournis par l’API visualcrossing , [Weather Data & Weather API | Visual Crossing](https://www.visualcrossing.com/)

La documentation de l’ API est ici  [Timeline Weather API – Visual Crossing Weather](https://www.visualcrossing.com/resources/documentation/weather-api/timeline-weather-api/)

## Librairies et documentations

- Mui : [https://mui.com/](https://mui.com/)
- React documentation : [https://reactjs.org/](https://reactjs.org/)
- Redux Toolkit : [https://redux-toolkit.js.org/](https://redux-toolkit.js.org/)
- Chart.js : [https://www.chartjs.org/docs/latest/]([https://www.chartjs.org/docs/latest/](https://www.chartjs.org/docs/latest/))

## Maquette

<iframe style="border:none" width="800" height="450" src="https://whimsical.com/embed/4oXZHmftrcbWqrXsdRfuJ2@2Ux7TurymND2vWYmCe8N"></iframe>
