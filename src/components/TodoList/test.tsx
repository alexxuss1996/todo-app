import { vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TodoList } from './TodoList'
import { type TodoItem } from 'components/App'

const mockSetTodos = vi.fn()

const todos: TodoItem[] = [
  { id: 1, text: 'buy food', completed: false },
  { id: 2, text: 'finish project', completed: true }
]

describe('<TodoList />', () => {
  it('render TodoList', () => {
    const { container } = render(
      <TodoList todos={todos} setTodos={mockSetTodos} />
    )

    expect(screen.getByRole('list')).toBeInTheDocument()
    expect(screen.getAllByRole('listitem').length).toBe(2)
    expect(container).toBeInTheDocument()
  })
})
