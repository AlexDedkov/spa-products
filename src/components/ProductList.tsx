import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { toggleLike, deleteProduct } from '../redux/productsSlice';
import Card from './Card';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { items, filter } = useSelector((state: RootState) => state.products);
  const filteredItems = filter === 'favorites' ? items.filter((item) => item.liked) : items;

  return (
    <div className="product-list">
      {filteredItems.map((product) => (
        <Card
          key={product.id}
          product={product}
          onLike={() => dispatch(toggleLike(product.id))}
          onDelete={() => dispatch(deleteProduct(product.id))}
        />
      ))}
    </div>
  );
};

export default ProductList;
