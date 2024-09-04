import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todos = response.data as Todo[];
  todos.forEach((todo) => {
    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;
    logTodo(id, title, completed);
  });
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
   The Todo with ID: ${id}
   Has a title of : ${title}
   Is it complated? ${completed}
   `);
};
