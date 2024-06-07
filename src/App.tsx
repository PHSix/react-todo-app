import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { TodoItemType } from './globalTypes'
import Creator from './components/Creator'
import Todos from './components/Todos'

function App() {
  const [todoItems, setTodoItems] = useState<TodoItemType[]>([])

  return (
    <ChakraProvider>
      <Creator onAppend={(item) => {
        setTodoItems([...todoItems, item])
      }}
      />

      <Todos items={todoItems} />
    </ChakraProvider>
  )
}

export default App
