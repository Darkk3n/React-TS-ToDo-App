import { useState } from 'react'
import { type TodoTitle } from './types'

interface Props {
   saveTodo: ({ title }: TodoTitle) => void

}
export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
   const [inputValue, setinputValue] = useState('')

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()
      saveTodo({ title: inputValue })
      setinputValue('')
   }
   return (
      <form onSubmit={handleSubmit}>
         <input className='new-todo'
            value={inputValue}
            onChange={(e) => { setinputValue(e.target.value) }}
            placeholder='What do you want to do?'
            autoFocus
         />
      </form>
   )
}
