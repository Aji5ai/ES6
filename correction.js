let tasks = [
  { title: "Faire les courses", isComplete: false },
  { title: "Nettoyer la maison", isComplete: true },
  { title: "Planter le jardin", isComplete: false },
];

const addTask = (taskTitle) => {
  tasks = [...tasks, { title: taskTitle, isComplete: false }];
};

const removeTask = (taskTitle) => {
  tasks = tasks.filter((task) => {
    return task.title !== taskTitle;
  });
};

const toggleTaskComplete = (taskTitle) => {
  tasks = tasks.map((task) =>
    task.title === taskTitle ? { ...task, isComplete: !task.isComplete } : task
  );
};

const completedTasks = () => tasks.filter((task) => task.isComplete);
const activeTasks = () => tasks.filter((task) => !task.isComplete);

const displayTasks = () => {
  tasks.forEach((task) => {
    const statut = task.isComplete ? "complétée" : "active";
    console.log(`${task.title}: ${statut}`);
  });
};

// Comment utiliser ton app
addTask("Apprendre JavaScript");
toggleTaskComplete("Faire les courses");
removeTask("Nettoyer la maison");
console.log("Tâches complétées :");
displayTasks(completedTasks());
console.log("Tâches actives :");
displayTasks(activeTasks());

