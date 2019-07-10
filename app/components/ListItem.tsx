import * as React from 'react'
import Link from 'next/link'

import { Book } from '../interfaces'

type Props = {
  data: Book
}

const ListItem: React.FunctionComponent<Props> = ({ data }) => (
  <Link href={`/detail?id=${data.title}`}>
    <a>
      {data.title}: {data.authors}
    </a>
  </Link>
)

export default ListItem