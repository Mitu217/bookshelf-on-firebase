import * as React from 'react';
import { IBook } from '../interfaces';
import ListItem from './ListItem';

interface IProps {
  items: IBook[];
}

const List: React.FunctionComponent<IProps> = ({ items }) => (
  <ul>
    {items.map((item) => (
      <li key={item.title}>
        <ListItem data={item} />
      </li>
    ))}
  </ul>
);

export default List;
