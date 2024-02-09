import { AddTodoForm } from 'components/AddTodoForm/AddTodoForm'
import { Layout } from 'components/Layout'
import { TodoList } from 'components/TodoList/TodoList'
import { useState } from 'react'

export interface TodoItem {
  id: number
  text: string
  completed: boolean
}

const App = () => {
  const [todos, setTodos] = useState<TodoItem[]>([])

  return (
    <Layout>
      <AddTodoForm todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} setTodos={setTodos} />
    </Layout>
  )
}

export default App
