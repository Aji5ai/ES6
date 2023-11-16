# JavaScript Moderne : ES6

Le JavaScript moderne englobe ES6 et les versions ultérieures.

## Ressources

- [Fonctions fléchées](https://www.youtube.com/watch?v=-WvmzxOVeL0)
- [Opérateur de décomposition (Spread Operator)](https://www.youtube.com/watch?v=2w6E_NaIl-o)
- [Fonctions de tableau en ES6](https://www.youtube.com/watch?v=aUsECJo7QWk)
- [Opérateur ternaire](https://www.youtube.com/watch?v=u-HdnJ1TEwo)

## Contexte du projet

Dans ce brief, vous allez apprendre:

- Ce qu'est l'ECMAScript pour JavaScript.
- Pourquoi la version 6 est si importante.
- À écrire du JavaScript de manière moderne et optimisée grâce aux fonctionnalités introduites depuis l'ES2015, ou ES6.

### ECMAScript 6 : La révolution

Le standard qui spécifie JavaScript est ECMAScript (ES), principalement défini par le W3C. [L'ECMAScript détermine de nombreux aspects du langage JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript/JavaScript_technologies_overview#quelles_sont_les_caract%C3%A9ristiques_decmascript).

En 2012, les navigateurs modernes prenaient en charge intégralement ECMAScript 5.1. C'était l'époque où Flash, alors la technologie dominante pour dynamiser les pages web, commençait à décliner, en partie parce qu'il n'était pas pris en charge sur les iPhones et iPads d'Apple. Le besoin se faisait sentir pour un successeur à Flash, et JavaScript était prêt à relever le défi !

La sixième version majeure du standard, officiellement appelée ECMAScript 2015 mais souvent désignée sous le nom d'ECMAScript 6 ou ES6, a été finalisée et publiée le 17 juin 2015. Elle coïncidait avec l'avènement de HTML5 et de CSS3. Avec ces versions, par exemple, le DOM a été enrichi d'éléments comme `<canvas>`, `<audio>` et `<video>`, tandis que CSS a intégré les **media queries**.

Pour le javascript aussi, la transformation est profonde.

L'écriture des pages web a été révolutionnée, marquant un avant et un après. Les standards ECMAScript ont continué d'évoluer à un rythme annuel, mais sans changements aussi majeurs depuis lors. La dernière version en rédaction à l'heure actuelle est l'ECMAScript 2020. Cependant, il est courant d'entendre les développeurs parler de leur code comme étant écrit "en ES6".

### Les nouveauté du JavaScript ES6

Voici les principales avancées apportées par l'ES6 à JavaScript. Cette liste n'est pas exhaustive, mais nous nous concentrerons sur ces éléments pour ce cours.

- `let` et `const`
- Fonctions fléchées: `() => {}`
- Opérateurs de décomposition (spread operator) : `{...}` et `[...]`
- Fonctions `.map()`, `.filter()` et `.includes()` pour les tableaux
- Opérateurs ternaires

#### Les fonctions fléchées

Les fonctions fléchées offrent une façon moderne et concise d'écrire des fonctions.

Avant :

```js
function addNumbers(number1, number2) {
    return number1 + number2;
}
```

Avec les fonctions fléchées :

```js
const addNumbers = (number1, number2) => {
    return number1 + number2;
}
```

Dans ce cas, comme il n'y a qu'une seule instruction (`return`), on peut simplifier davantage :

```js
const addNumbers = (number1, number2) => number1 + number2;
```

Les fonctions fléchées n'ont pas de contexte (`this`) propre ; elles héritent donc du contexte global. Cela est avantageux dans certaines situations, mais restreint leur utilisation dans les classes fonctionnelles (pas de `this` interne pour assigner des propriétés) et souvent pour les gestionnaires d'événements.

#### L'opérateur spread pour les tableaux

L'opérateur spread en JavaScript permet de "répandre" ou "étaler" les éléments d'un tableau ou les propriétés d'un objet.

Imagine que tu as un sandwich vide et que tu veuilles y ajouter tous ses ingrédients d'un coup : l'opérateur `spread` est l'outil qui te permet de faire cela dans ton code.

Voici quelques façons simples de l'utiliser :

##### Combinaison de tableaux

Pour combiner deux tableaux :

```js
let fruits1 = ['pommes', 'bananes'];
let fruits2 = ['oranges', 'raisins'];
let tousLesFruits = [...fruits1, ...fruits2]; // ça donne ['pommes', 'bananes', 'oranges', 'raisins']
```

##### Clonage de tableaux

Pour cloner une liste (dupliquer son contenu sans modifier l'original) :

```js
let original = ['clé', 'portefeuille', 'téléphone'];
let copie = [...original]; // Deux listes au contenu identique, mais dans des variables séparées
```

Cloner un tableau en y ajoutant un élément au passage :

```js
let copie = [...copie, 'stylo'];
```

#### L'opérateur spread dans les fonctions :

Passer les éléments d'un tableau comme arguments d'une fonction :

```js
function ajouteTroisNombres(a, b, c) {
  return a + b + c;
}
let nombres = [1, 2, 3];
let resultat = ajouteTroisNombres(...nombres); // Équivalent à ajouteTroisNombres(1, 2, 3)
```

#### L'opérateur spread avec les objets

Combiner deux objets dans un nouveau :

```js
let objet1 = { nom: 'Alice', age: 25 };
let objet2 = { travail: 'développeuse', pays: 'France' };
let personne = { ...objet1, ...objet2 };
// personne est { nom: 'Alice', age: 25, travail: 'développeuse', pays: 'France' }
```

C'est un peu comme si tu renversais un sac de billes sur le sol : les billes (éléments d'un tableau ou propriétés d'un objet) se répandent. Avec l'opérateur spread, tu choisis où et comment elles se répandent dans ton code. C'est un moyen très pratique de manipuler des collections d'éléments en JavaScript !

### Les fonctions ES6 pour les tableaux

Avec l'ES6, de nombreuses nouvelles fonctions ont été ajoutées aux tableaux, permettant souvent l'enchaînement lorsque ces fonctions renvoient un tableau résultant.

Parmi elles, `array.map()`, `array.filter()`, `array.reduce()`, etc. Il existe de nombreuses autres fonctions utiles : [Fonctions sur les tableaux](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).

#### array.map()

`array.map()` applique une fonction à chaque élément d'un tableau, transforme cet élément et renvoie un nouveau tableau à la fin.

Exemple : créer un tableau avec seulement les montants des factures.

```js
const factures = [
  {montant: 200, nom: 'Hervé Getal'},
  {montant: 150, nom: 'Théo Logi'},
  {montant: 120, nom: 'Malik Hide'}
];
const montants = factures.map(facture => {
  return facture.montant;
});
console.log(montants);
// [200, 150, 120]
```

#### array.filter()

`array.filter()` renvoie un nouveau tableau contenant les éléments qui satisfont la condition définie dans la fonction de filtrage : cette fonction renvoie `true` si on conserve un élément, ou `false` si on rejete l'élément.

Exemple : créer un tableau avec les factures dont le montant est supérieur à 140.

```js
const factures = [
  {montant: 200, nom: 'Hervé Getal'},
  {montant: 150, nom: 'Théo Logi'},
  {montant: 120, nom: 'Malik Hide'}
];
const grossesFactures = factures.filter(facture => {
  return facture.montant > 140;
})
console.log(grossesFactures);
/*
[
  {montant: 200, nom: 'Hervé Getal'},
  {montant: 150, nom: 'Théo Logi'},
]
*/
```

### L'opérateur ternaire

L'opérateur ternaire permet d'écrire des conditions de manière condensée :

```js
let isEven;
if (number % 2 === 0) {
  isEven = true;
} else {
  isEven = false;
}
```

Peut être réécrit avec l'opérateur ternaire :

```js
const isEven = number % 2 === 0 ? true : false;
```

Attention : l'utilisation systématique de l'opérateur ternaire n'est pas toujours recommandée. La clarté du code doit est privilégiée, et dans certains cas, une structure `if/else` peut être plus lisible.

## Modalités Pédagogiques

Nous allons reconstruire une application de gestion de tâches en JavaScript, en utilisant ES6. Voici les spécifications :

- Les tâches sont stockées dans un tableau.
- Les tâches peuvent être listées (avec une fonction) : la liste affiche le nom et l'état de chaque tâche.
- Chaque tâche a un titre et un état `isComplete`, qui peut être vrai ou faux.
- Il est possible d'ajouter une nouvelle tâche (avec une fonction).
- Il est possible de changer l'état `isComplete` d'une tâche (avec une fonction).

#### 1 - Définir le tableau

Le tableau sera défini dans une constante :

```js
const tasks = [
  { title: 'Faire les courses', isComplete: false },
  { title: 'Nettoyer la maison', isComplete: true },
  { title: 'Planter le jardin', isComplete: false }
];
```

#### 2 - Ajouter une tâche

Créez une fonction `addTask`, en utilisant une fonction fléchée et l'opérateur spread.

#### 3 - Effacer une tâche

Définissez une fonction `removeTask`, en utilisant une fonction fléchée et `array.filter()`.

#### 3 - Basculer l'état d'une tâche

Créez une fonction `toggleTaskStatus`, en incorporant une fonction fléchée, l'opérateur spread et l'opérateur ternaire.

#### 4 - Afficher les listes de tâches

Réalisez une fonction qui puisse afficher toutes les tâches, uniquement les tâches complétées, ou seulement celles incomplètes, dans la console. Utilisez les fonctions fléchées, les fonctions ES6 des tableaux... C'est le moment d'être créatif !

Vous travaillerez en autonomie sur ce brief. Essayez de résoudre par vous-même les problèmes rencontrés ! Votre code devra être dans le fichier `main.js`.

Commentez votre code pour expliquer vos choix.

Une fois l'application développée, partagez votre code versionné sur GitLab.

## Modalités d'évaluation

- Un dépôt GitLab contient le code du projet
- Le programme fonctionne
- Des commentaires expliquent le code

## Livrables

Un lien vers GitLab

## Critères de performance

- La simplicité de la solution donnée (DRY, KISS)
- Le code source est documenté (commenté)
- Utiliser un outil de gestion de versions
