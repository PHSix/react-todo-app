import TodoItem from './TodoItem'
import type { TodoItemType } from '@/globalTypes'

interface Props {
  items: TodoItemType[]
}

export default function Todos(props: Props) {
  return (
    <div>
      {props.items.map(item => <TodoItem item={item} key={item.id} />)}
    </div>
  )
}
