import { Button, Select } from '@chakra-ui/react'
import { useMemo, useState } from 'react'
import TodoItem from './TodoItem'
import type { TodoItemType } from '@/globalTypes'

interface Props {
  items: TodoItemType[]
  onCompleted: (id: string, completed: boolean) => void
  onClearCompleted: VoidFunction
}

enum OptVal {
  All = 'all',
  Completed = 'completed',
  NotCompleted = 'not_completed',
}

export default function Todos(props: Props) {
  const [filterType, setFilterType] = useState(OptVal.All)
  const items = useMemo(() => {
    if (filterType === OptVal.Completed)
      return props.items.filter(item => item.completed)
    else if (filterType === OptVal.NotCompleted)
      return props.items.filter(item => !item.completed)

    return props.items
  }, [props.items, filterType])
  if (props.items.length === 0) {
    return null
  }

  return (
    <div className="border-[1px] rounded">
      <div className="px-4 py-2 border-b-[1px] flex justify-end">
        <Select
          border="none"
          padding={0}
          margin={0}
          width="auto"
          textAlign="right"
          size="sm"
          outline="none"
          onChange={(e) => {
            setFilterType(e.target.value as OptVal)
          }}
        >
          <option value={OptVal.All}>all</option>
          <option value={OptVal.Completed}>completed</option>
          <option value={OptVal.NotCompleted}>not completed</option>
        </Select>
      </div>
      {items.map(item => (
        <TodoItem
          onCompleted={props.onCompleted}
          item={item}
          key={item.id}
        />
      ))}

      <div className="p-4 flex flex-row justify-between items-center">
        <div>{`${items.length} todo left`}</div>

        <Button colorScheme="red" onClick={props.onClearCompleted} size="sm">
          Clear All Completed
        </Button>
      </div>
    </div>
  )
}
