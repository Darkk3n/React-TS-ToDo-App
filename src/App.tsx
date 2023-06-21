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
  const [todos] = useState(mockTodos)
  return (
    <Todos todos={todos} />
  )
}

export default App
