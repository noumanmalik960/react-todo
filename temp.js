const todo = {
    text: 'This is first entry',
    complete: false
}


console.log(todo);

const newTodo = {
    ...todo,
    complete: true
}

console.log(newTodo);