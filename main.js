// Définir le tableau
let tasks = [
    { title: 'Faire les courses', isComplete: false },
    { title: 'Nettoyer la maison', isComplete: true },
    { title: 'Planter le jardin', isComplete: false }
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
let newTask = { title: 'Ranger le bureau', isComplete: false }
const addTask = (task) => tasks = [...tasks, task ]
addTask(newTask);
//console.log(tasks)


// 3 - Effacer une tâche
// Ancienne notation

// ES6
const removeTask = (taskToRemove) => {
    tasks = tasks.filter(task => task.title !== `${taskToRemove}`);
} // Note : pas besoin de return et bien choisir un nom différent entre taskToRemove et task (ne pas mettre task partout)
removeTask('Ranger le bureau');
//console.log(tasks);

// 4 - Basculer l'état d'une tâche
// Ancienne notation

// ES6
const toggleTaskStatus = (taskIndexToToggle) => {
    tasks[taskIndexToToggle].isComplete = tasks[taskIndexToToggle].isComplete == true ? false : true;
}

toggleTaskStatus(0);
toggleTaskStatus(1);
//console.log(tasks) 

// 5 - Afficher les listes de tâches
// Ancienne notation


/* Réalisez une fonction qui puisse afficher toutes les tâches, uniquement les tâches complétées, ou seulement celles incomplètes, dans la console. Utilisez les fonctions fléchées, les fonctions ES6 des tableaux... C'est le moment d'être créatif ! */
// ES6
const stillToDo = () => {
    let tasksToDo = tasks.filter(task => task.isComplete == false);
    for (eachTask in tasksToDo) {
        console.log(tasksToDo[eachTask].title)
    }
}

stillToDo()