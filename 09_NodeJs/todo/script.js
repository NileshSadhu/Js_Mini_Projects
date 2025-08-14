const fs = require('fs');
const { type } = require('os');
const filePath = './tasks.json';

const loadTasks = () => {
    try {
        // databuffer is a space in memory (usually RAM) that temporarily stores binary data. 
        const dataBuffer = fs.readFileSync(filePath);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeTask = (taskNo) => {
    let taskRemoveIndex = taskNo - 1;
    const Tasks = loadTasks();
    if (Tasks.length > 0 && taskNo < Tasks.length) {
        Tasks.splice(taskRemoveIndex, 1);
        saveTasks(Tasks);
    } else {
        console.log("Index out of number.");
    }
}

const listTasks = () => {
    const Tasks = loadTasks();
    Tasks.forEach((task, index) => { console.log(`${index + 1}-${task.task}`) });
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON);
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({ task });
    saveTasks(tasks);
    console.log('Task added : ', task);
}


// node filename command argument
// if you want to get command line argument use process.agrv which will 
// return an array which first 2 spot is taken by node[0] and  filename[1]
const command = process.argv[2];
const argument = process.argv[3];

if (command === 'add') {
    addTask(argument);
} else if (command === 'list') {
    listTasks();
} else if (command === 'remove') {
    removeTask(parseInt(argument));
} else {
    console.log('command not found !');
}