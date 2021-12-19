const todos = [
  {
    id: 1,
    title: 'Go to School',
    completed: true
  },
  {
    id: 2,
    title: 'Go to Musium',
    completed: true
  },
  {
    id: 3,
    title: 'Go to Shopping',
    completed: true
  }
]

// for (let i = 0; i < todos.length; i++) {
//   console.log(todos[i]);
// }

for ( todo of todos ) {
  todo.completed === false ? console.log(todo.title) : console.log('didnt do')
}