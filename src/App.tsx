import { useState } from 'react';
import { Footer } from './Footer';
import { Todos } from './Todos';
import { TODO_FILTERS } from './consts';
import { type FilterValue, type TodoId, type Todo as TodoType } from './types';

const mockTodos = [
  {
    id: '1',
    title: 'ToDo 1',
    completed: false
  },
  {
    id: '2',
    title: 'ToDo 2',
    completed: true
  },
  {
    id: '3',
    title: 'ToDo 3',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)
  const [filters, setFilters] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(r => r.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({ id, completed }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(r => {
      if (r.id === id) {
        return {
          ...r,
          completed
        }
      }
      return r
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilters(filter)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filters === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filters === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <Todos todos={filteredTodos} onRemoveTodo={handleRemove} onToogleCompleted={handleCompleted} />
      <Footer activeCount={activeCount}
        filterSelected={filters}
        handleFilterChange={handleFilterChange}
        completedCount={completedCount}
        onClearCompleted={() => { }} />
    </div>
  )
}

export default App
