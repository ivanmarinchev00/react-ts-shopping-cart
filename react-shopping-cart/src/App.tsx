import { useState} from 'react';
import { useQuery } from 'react-query';
import  Drawer  from '@material-ui/core/Drawer';
import { LinearProgress } from '@material-ui/core';
import  Grid  from '@material-ui/core/Grid';
import  AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import  Badge  from '@material-ui/core/Badge';

import { Wrapper } from './app.styles';

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async(): Promise<CartItemType[]> => {
 return await (await fetch('https://fakestoreapi.com/products')).json()
}

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>('products', getProducts)
  console.log(data)
  return (
    <div className="App">
      First Ever TypeScript Project
    </div>
  );
}

export default App;
