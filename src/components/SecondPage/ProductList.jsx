import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, isGridView }) => {
  return (
    <div className={`grid gap-6 ${isGridView ? 'grid-cols-3' : 'grid-cols-1'}`}>
      {products.slice(0, isGridView ? 9 : 6).map((product) => ( 
        <ProductCard key={product.id} {...product} isGridView={isGridView} />
      ))}
    </div>
  );
};

export default ProductList;
