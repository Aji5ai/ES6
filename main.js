// Définir le tableau
let tasks = [
  {title: "Faire les courses", isComplete: false},
  {title: "Nettoyer la maison", isComplete: true},
  {title: "Planter le jardin", isComplete: false},
];

// 2 - Ajouter une tâche

// Ancienne notation

/* let newTask = { title: 'Ranger le bureau', isComplete: false }
function addTask(task) {
    return tasks = [...tasks, task]
} 
addTask(newTask);
console.log(tasks);
*/

// ES6
let newTask = {title: "Ranger le bureau", isComplete: false};
const addTask = (task) => (tasks = [...tasks, task]); // le ...tasks permet de récupérer les éléments du tableau pour y ajouter ensuite un autre élément
//Note :// let addTask = tasks; dans ce contexte addTask va pointer au même espace de stockage que tasks. Donc si on modifie la dernière ça changera aussi la première. C'est une copie par référence. 
//Si on veut faire une copie par valeur il faut faire : let addTask = [...tasks]; Dans ce cas on a bien deux objets qui pointent à deux endroits de stockage différents qui ont pour l'instant le même contenu. Pour en savoir plus, lire "Valeurs & références" ici : https://blog.coddity.com/articles/approfondir-js/

// Appel de la fonction
addTask(newTask);
console.log(tasks);

// 3 - Effacer une tâche
// ES6
const removeTask = (taskToRemove) => {
  tasks = tasks.filter((task) => task.title !== `${taskToRemove}`); // on regarde à chaque élément si son titre correspond à celui qui est entré en paramètre (taskToRemove), et on prends ceux qui ne correspondent pas
}; // Note : pas besoin de return et bien choisir un nom différent entre taskToRemove et task (ne pas mettre task partout). Un filter va boucler sur tous les éléments de la liste et retourner un tableau, comme map. Filter trie, map modifie.
removeTask("Ranger le bureau");
console.log(tasks);

// 4 - Basculer l'état d'une tâche
// ES6
const toggleTaskStatus = (taskIndexToToggle) => {
  tasks[taskIndexToToggle].isComplete =
    tasks[taskIndexToToggle].isComplete == true ? false : true;
}; // on récupère l'élément par son index et vérifie si son statut (isComplete) est égal ou non à true / false
// peut aussi s'écrire : tasks[taskIndexToToggle].isComplete = !tasks[taskIndexToToggle].isComplete

toggleTaskStatus(0); // On change le status du premier élément du tableau
toggleTaskStatus(1); // pareil pour le 2eme élément
console.log(tasks);

// 5 - Afficher les listes de tâches
// ES6

// Afficher que les tâches incomplètes (.filter + .map)
const stillToDo = () => {
  let tasksToDo = tasks.filter((task) => task.isComplete == false); // on ne garde que les objets qui ont un status false
  // S'écrit aussi : let tasksToDo = tasks.filter((task) => !task.isComplete); (mais je comprends pas si ça prend les false ou si c'est juste l'inverse)
  console.log("Liste des tâches restantes à faire (seulement leurs titres) : ");
  console.log(tasksToDo.map((task) => task.title)); // On extrait dans un nouveau tableau les titres (uniquement) et on les affiche
};
stillToDo();

// Afficher que les tâches incomplètes (.filter + boucle for)
const stillToDo2 = () => {
  let tasksToDo = tasks.filter((task) => task.isComplete == false);
  for (eachTask in tasksToDo) { // Alternative à map qui créé un autre tableau. là pas besoin de faire un autre tableau
    console.log("Encore à faire : ", tasksToDo[eachTask].title); // récupère le titre de chaque élément de tasksToDo.
    // Important : eachTask est bien un index, et non pas l'élément lui même
  }
};
stillToDo2();

// Afficher que les tâches déjà réalisées (.filter + boucle for)
const alreadyDone = () => {
  let tasksDone = tasks.filter((task) => task.isComplete == true); // Cette fois ci on ne garde que les objets qui ont un status true
  for (eachTask in tasksDone) {
    console.log("Tâches réalisées : ", tasksDone[eachTask].title);
  }
};
alreadyDone();
