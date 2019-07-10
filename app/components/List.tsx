import * as React from 'react'
import ListItem from './ListItem'
import { Book } from '../interfaces'

type Props = {
  items: Book[]
}

const List: React.FunctionComponent<Props> = ({ items }) => (
  <ul>
    {items.map(item => (
      <li key={item.title}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
)

export default List