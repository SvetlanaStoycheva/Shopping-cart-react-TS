import { useState } from 'react';
import { useQuery } from 'react-query';
//Components
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
//Styles
import { Wrapper } from './App.styles';
//Types
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

//'https://fakestoreapi.com/products
const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();
// const response = await fetch('https://fakestoreapi.com/products');
// const data = await response.json();
// console.log(data);
// return data;
const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );
  console.log(data);

  return <div className='App'>start</div>;
};

export default App;