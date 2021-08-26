import React, { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productActions';
import Product from './Product';

import axios from 'axios';

const Products = () => {
  const dispatch = useDispatch();

  const fetchProducts = useCallback(async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  }, [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className='ui grid container'>
      <Product />
    </div>
  );
};

export default Products;
