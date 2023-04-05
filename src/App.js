import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import styled, { injectGlobal } from "styled-components"
import { useTodoList } from "./hooks/useTodoList";

function App() {
  // const [todos, setTodos] = useState(startTodolist)

  const { todos, toggleTodo } = useTodoList(startTodolist)

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) < today && !todo.isDone)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => new Date(todo.deadline) >= today && !todo.isDone)
  }

  const getCompletedTodos = () => {
    return todos.filter((todo) => todo.isDone)
  }

  // const toggleTodo = (id) => {
  //   const updatedTodos = todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, isDone: !todo.isDone }
  //     } else {
  //       return todo
  //     }
  //   })
  //   setTodos(updatedTodos)
  // }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <TodoList
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />
      <TodoList
        title="Completed"
        items={getCompletedTodos()}
        onToggleTodo={toggleTodo}
      />
    </div>
  )
}


export default App



