import { useState } from 'react';
import { Todos } from './Todos';
import { type TodoId, type Todo as TodoType } from './types';

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

  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handleRemove} onToogleCompleted={handleCompleted} />
    </div>
  )
}

export default App
