var arr = [{ "id": "10", "class": "child-of-9" }, { "id": "11", "class": "child-of-10" }];

var array = [{ 'task': 'task1' }, { 'task': 'task2' }, { 'task': 'task3' }];

arr.forEach((item, index) => {
    item.id = 100 + index;
    console.log(item.class);
    console.log(item.id);
});

array.splice(0, 1, { 'task': 'task101' });
// splice ([array kidar se satrt kar na hai], [or uder se kitne element nikal ne hai], [or uder kya add kar na hai]);
console.log(array);

let taskNo = 3;
var tasks = [{ "task": "Buy Protien" }, { "task": "Buy Milk&Bread" }, { "task": "Buy Apples" }, { "task": "Buy Mango" }, { "task": "Buy Grapes" },];
tasks.splice(taskNo);
console.log(tasks);