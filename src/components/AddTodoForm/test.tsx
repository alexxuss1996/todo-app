import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AddTodoForm } from './AddTodoForm'
import { type TodoItem } from 'components/App'

const mockSetTodos = vi.fn()

const todos: TodoItem[] = [
  { id: 1, text: 'buy food', completed: false },
  { id: 2, text: 'finish project', completed: true }
]

describe('<AddTodoForm />', () => {
  it('render TodoList', () => {
    const { container } = render(
      <AddTodoForm todos={todos} setTodos={mockSetTodos} />
    )

    expect(screen.getByPlaceholderText('Your Todo...')).toBeInTheDocument()
    expect(screen.getByText('Add Todo')).toBeInTheDocument()
    expect(container).toBeInTheDocument()
  })
})
