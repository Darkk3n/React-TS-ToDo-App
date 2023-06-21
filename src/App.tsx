import { useState } from 'react';
import { Todos } from './Todos';

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

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(r => r.id !== id)
    setTodos(newTodos)
  }
  return (
    <div className='todoapp'>
      <Todos todos={todos} onRemoveTodo={handleRemove} />
    </div>
  )
}

export default App
