# Wiki Learn 
Lis. Réponds. Progresse. Une plateforme d'apprentissage gamifiée, pensée Mobile First, qui transforme le savoir de Wikipedia en une aventure interactive.

## Le Concept
**Wiki Learn** repose sur une boucle d'apprentissage simplifiée et efficace en trois étapes, déclinée sur trois thématiques pour cette V1. (Histoire, Science, Culture):

**Cours**: Lecture immersive via l'API Wikipedia.

**Test**: Validation des connaissances par un quiz dynamique.

**XP**: Gain d'expérience et déblocage de badges à l'égérie de notre mascotte **Bébé Globe**.

## Fonctionnalités
### Priorité 1: Le cœur (MVP)
**WikiLesson**: Le cours, directement tiré de l'API Wikipedia. 

**WikiQuiz**: Un moteur de QCM dynamique qui interroge l'utilisateur sur les points clés du cours. Les questions sont chargées intelligemment via un catalogue JSON structuré par thématique.

**WikiXP & WikiBadges**: La progression gamifiée, chaque succès est récompensé instantanément, notamment par la customisation de notre mascotte selon le seuil d'XP.

### Priorité 2: L'Expérience
**Wiki Dashboard**: Une interface centralisée permettant de visualiser ses statistiques en temps réel (XP total, niveau actuel) et de naviguer entre les catalogues de thèmes. 

**Wiki Feedback**: Micro-interactions et animations (confettis, barres de progression, feedbacks d'erreurs). Grâce à des animations CSS précises et la bibliothèque canvas-confetti, chaque victoire est célébrée. À l'inverse, des feedbacks visuels (secousses, mascottes) accompagnent l'utilisateur dans l'erreur sans le décourager.

### Priorité 3: L'Engagement (Bonus)
**Leaderboard**: Classement simulé via localStorage pour comparer les scores par thématique.

*Certaines de ces fonctionnalités ont pu être développées, suivant l'ordre de priorités, au cours de ce Hackathon 72h, et d'autres restent à l'être pour une potentielle V2.*

## Tech Stack
Frontend: **React.js (Vite)**

Styles: **CSS3 (Flexbox/Grid, Animations)**

API: **Wikipedia REST API**

Librairies: **canvas-confetti**

Déploiement: **Netlify**

### Installation
Clone le dépôt:

```bash
git clone [[https://github.com/c-txr/projet-data-anime.git](https://github.com/c-txr/projet-data-anime.git)](https://github.com/c-txr/projet-hackathon)
cd projet-hackathon
```
Installe les dépendances:

```bash
npm install
```

Lance le projet en local:

```bash
npm run dev
```

