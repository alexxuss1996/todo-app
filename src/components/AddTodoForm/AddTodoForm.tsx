import { type TodoItem } from 'components/App'
import React, { useState } from 'react'

interface AddTodoFormProps {
  setTodos: React.Dispatch<React.SetStateAction<TodoItem[]>>
  todos: TodoItem[]
}

export const AddTodoForm = ({ setTodos, todos }: AddTodoFormProps) => {
  const [text, setText] = useState('')
  const addTodo = (value: string) => {
    setTodos([...todos, { id: Date.now(), text: value, completed: false }])
    setText('')
  }
  return (
    <form
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault()
        text && addTodo(text)
      }}
      className="flex w-full gap-4"
    >
      <input
        type="text"
        placeholder="Your Todo..."
        className="w-full rounded p-3"
        value={text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setText(e.target.value)
        }
      />
      <button
        type="button"
        className="w-full min-w-16 rounded bg-blue-500 px-4 py-2 text-white disabled:bg-gray-400"
        onClick={() => addTodo(text)}
        disabled={!text.length}
      >
        Add Todo
      </button>
    </form>
  )
}
