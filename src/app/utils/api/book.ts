import fetch from 'isomorphic-unfetch';

const BASE_ROOT = 'https://asia-northeast1-bookshelf-ad148.cloudfunctions.net/app';

export async function getBooks() {
  const api = BASE_ROOT + '/api/v1/book/list';

  const res = await fetch(api);
  const json = await res.json();

  return json.data;
}
