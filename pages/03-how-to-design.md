---

# Etapes d'une étude

Une étude est composée des étapes suivantes :

1. <span v-mark.circle.red>**Etude préalable**</span>: phase initiale où les besoins et les exigences du projet sont identifiés et analysés.
2. <span v-mark.circle.red>**Etude détaillée**</span>: approfondit les aspects techniques et fonctionnels du projet.
3. **Programmation**: consiste à coder les fonctionnalités définies lors des études préalables et détaillées.
4. **Tests**: garantit la qualité et la fiabilité du logiciel.
5. **Installation**: consiste à déployer le logiciel dans l'environnement de production.
6. **Exploitation**: phase où le logiciel est utilisé en conditions réelles.

<!-- 
1. Étude Préalable
L'étude préalable est la phase initiale où les besoins et les exigences du projet sont identifiés et analysés. Cette étape inclut :

La définition des objectifs du projet.
L'analyse des besoins des utilisateurs.
L'évaluation de la faisabilité technique et économique.
La rédaction d'un cahier des charges.

2. Étude Détaillée
L'étude détaillée approfondit les aspects techniques et fonctionnels du projet. Elle comprend :

La spécification des exigences fonctionnelles et non fonctionnelles.
La conception de l'architecture du système.
La planification des ressources et des délais.
La création de maquettes ou de prototypes.

3. Programmation
La phase de programmation consiste à coder les fonctionnalités définies lors des études préalables et détaillées. Elle inclut :

Le développement du code source.
L'utilisation de gestionnaires de sources comme Git pour le versioning.
L'intégration continue avec des outils comme Jenkins pour automatiser les tests et les déploiements.

4. Tests
Les tests sont essentiels pour garantir la qualité et la fiabilité du logiciel. Cette phase comprend :

Les tests unitaires pour vérifier chaque composant individuellement.
Les tests d'intégration pour vérifier l'interaction entre les composants.
Les tests de validation pour s'assurer que le logiciel répond aux exigences initiales.
L'utilisation d'outils comme Xray pour la gestion des cas de tests et des plans de tests source.

5. Installation
L'installation consiste à déployer le logiciel dans l'environnement de production. Cette étape inclut :

La préparation de l'environnement de production.
Le déploiement du logiciel.
La configuration des systèmes et des bases de données.
La formation des utilisateurs finaux.

6. Exploitation
L'exploitation est la phase où le logiciel est utilisé en conditions réelles. Elle comprend :

La surveillance et le monitoring des performances.
La maintenance corrective pour résoudre les bugs et les problèmes.
La maintenance évolutive pour ajouter de nouvelles fonctionnalités.
L'utilisation d'outils de monitoring comme Prometheus pour exporter les métriques et surveiller les performances source.

-->

---

# Définir les processus métier

## Event storming

L'Event Storming est une technique de modélisation collaborative utilisée principalement dans le cadre du Domain-Driven Design (DDD)[@ddd]. Elle permet de visualiser et de comprendre les processus métier en identifiant les événements clés qui se produisent dans un système. [@event-storming-definition]

### Objectif principal

Cartographier les processus métier en identifiant les événements importants, les commandes, les agrégats et les projections. 

Cela aide à comprendre le flux de travail et à identifier les domaines problématiques ou les opportunités d'amélioration.

---

### Processus

1. **Identification des événements** : Les participants identifient et notent tous les événements significatifs qui se produisent dans le système. Un événement est quelque chose qui s'est produit et qui est important pour le domaine métier.
2. **Organisation des événements** : Les événements sont organisés chronologiquement pour représenter le flux de travail. Cela permet de visualiser comment les événements sont liés et comment ils influencent le système.
3. **Ajout de détails** : Une fois les événements identifiés, les participants ajoutent des détails tels que les commandes (actions qui déclenchent des événements), les acteurs et agrégats (objets métier qui gèrent les événements) .

---

### Un exemple

![](/event_storming.svg)

---

## Identification des zones du POS - Rappel

![](/pos_final.svg)