import { Checkbox } from '@chakra-ui/react'
import cn from 'classnames'
import type { TodoItemType } from '@/globalTypes'

interface Props {
  item: TodoItemType
  onCompleted: (id: string, completed: boolean) => void
}

export default function TodoItem(props: Props) {
  const { item } = props

  return (
    <div className="w-full p-4 overflow-hidden text-ellipsis whitespace-nowrap flex flex-row gap-4 border-b-[1px]">
      <Checkbox
        defaultChecked={item.completed}
        checked={item.completed}
        onChange={() => {
          props.onCompleted(item.id, !item.completed)
        }}
      >
      </Checkbox>
      <div className={cn('decoration-stone-800', {
        'line-through dark:decoration-stone-300': item.completed,
        'text-stone-400': item.completed,
      })}
      >
        {item.content}
      </div>
    </div>
  )
}
