import Link from 'next/link';
import * as React from 'react';
import { IBook } from '../interfaces';

interface IProps {
  data: IBook;
}

const ListItem: React.FunctionComponent<IProps> = ({ data }) => (
  <Link href={`/detail?id=${data.title}`}>
    <a>
      {data.title}: {data.authors}
    </a>
  </Link>
);

export default ListItem;
