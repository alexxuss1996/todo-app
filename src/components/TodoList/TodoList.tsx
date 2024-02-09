import { type TodoItem } from 'components/App'
import React from 'react'

interface TodoListProps {
  todos: TodoItem[]
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
}

export const TodoList = ({ todos, setTodos }: TodoListProps) => {
  const deleteTodo = (id: number) => {
    const refreshedTodos = todos.filter((item) => item.id !== id)
    setTodos(refreshedTodos)
  }

  const toggleCompleted = (id: number) => {
    setTodos(
      todos?.map((todo: TodoItem) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo
      })
    )
  }

  return (
    <>
      {todos.length ? (
        <ul className="w-full rounded bg-white py-4">
          {todos.map((item) => (
            <li key={item.id} className="px-4 py-2">
              <label className="flex justify-between">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    checked={item.completed}
                    className="mr-2"
                    onChange={() => toggleCompleted(item.id)}
                  />
                  <p
                    className={item.completed ? 'line-through' : 'no-underline'}
                  >
                    {item.text}
                  </p>
                </div>
                <button
                  className="self-end rounded bg-red-500 px-2 py-1 text-white"
                  onClick={() => deleteTodo(item.id)}
                >
                  Delete
                </button>
              </label>
            </li>
          ))}
        </ul>
      ) : (
        <p>List is empty, please add Todo :&#41;</p>
      )}
    </>
  )
}
