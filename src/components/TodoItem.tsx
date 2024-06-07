import type { TodoItemType } from '@/globalTypes'

interface Props {
  item: TodoItemType
}

export default function TodoItem(props: Props) {
  const { item } = props

  return (
    <div>
      {item.content}
    </div>
  )
}
