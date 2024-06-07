import { useState } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { TodoItemType } from './globalTypes'
import Creator from './components/Creator'
import Todos from './components/Todos'
import { catchify } from './utils/catchify'
import { getObjectFromStorage, syncObjectForStorage } from './utils/storageUtils'
import Header from './components/Header'

const TODO_STORAGE_KEY = 'todoItems'

function App() {
  const [todoItems, _setTodoItems] = useState<TodoItemType[]>(() => catchify(getObjectFromStorage<TodoItemType[]>, TODO_STORAGE_KEY) || [])

  /**
   * set state with sync object for localStorage
   */
  function setTodoItems(items: TodoItemType[]) {
    syncObjectForStorage(TODO_STORAGE_KEY, items)
    _setTodoItems(items)
  }

  function onCompleted(id: string, completed: boolean) {
    setTodoItems(todoItems.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          completed,
        }
      }
      return item
    }))
  }

  function onClearCompleted() {
    setTodoItems(todoItems.filter(item => !item.completed))
  }

  return (
    <ChakraProvider>
      <main className="w-full h-full flex justify-center dark:bg-stone-800 dark:text-stone-100">
        {/* app layout */}
        <div className="w-full h-full px-4 py-4 md:w-[768px] md:px-0">
          <Header />

          <div className="flex flex-col gap-4 w-full mt-2">

            <Creator onAppend={(item) => {
              setTodoItems([...todoItems, item])
            }}
            />

            <Todos
              items={todoItems}
              onCompleted={onCompleted}
              onClearCompleted={onClearCompleted}
            />
          </div>

        </div>
      </main>
    </ChakraProvider>
  )
}

export default App
