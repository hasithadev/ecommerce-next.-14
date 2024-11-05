'use client'
import React from 'react';
import  {product} from '../../utils/product'
import Container from '@/app/components/Container';
import ProductDetails from './productDetails';

interface IParams{
  productId: string;
}

const Product = ({params}: {params: IParams}) => {
  console.log(params);
  return (
    <div className='p-8'>
     <Container>
     <ProductDetails product={product}/>
     </Container>
    </div>
  );
}

export default Product;
