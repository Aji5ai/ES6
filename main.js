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
console.log(tasks)


// 3 - Effacer une tâche

