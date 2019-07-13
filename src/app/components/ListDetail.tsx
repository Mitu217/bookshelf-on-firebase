import * as React from 'react';
import { IBook } from '../interfaces';

interface IProps {
  item: IBook;
}

const ListDetail: React.FunctionComponent<IProps> = ({
  item: user,
}) => (
  <div>
    <h1>Detail for {user.title}</h1>
    <p>ID: {user.authors}</p>
  </div>
);

export default ListDetail;
