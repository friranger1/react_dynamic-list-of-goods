import { Good } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  // return fetch(API_URL).then(response => response.json());
  const result = fetch(API_URL).then(res => res.json()).then(data => data);

  return result;
}

export const get5First = async () => {
  // return getAll().then(goods => goods);
  const goods = await getAll();

  return goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);// sort and get the first 5
};

export const getRedGoods = async () => {
  return await getAll().then(goods => goods.filter((good) => good.color === 'red')); // get only red


};
