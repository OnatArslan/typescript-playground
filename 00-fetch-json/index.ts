import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todos = response.data;
  todos.forEach((todo: Todo) => {
    const id = todo.id;
    const title = todo.title;
    const complated = todo.completed;
    console.log(`
   The Todo with ID: ${id}
   Has a title of : ${title}
   Is it complated? ${complated}
   `);
  });
});
