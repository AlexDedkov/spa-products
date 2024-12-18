import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../api/productsApi';
import { setProducts } from '../redux/productsSlice';
import Filters from '../components/Filters';
import ProductList from '../components/ProductList';

const Products: React.FC = () => {
  const dispatch = useDispatch();

  // Загружаем данные с API при загрузке компонента
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const products = await fetchProducts();
        // Обновляем состояние Redux
        dispatch(setProducts(products));
      } catch (error) {
        console.error('Ошибка загрузки продуктов:', error);
      }
    };

    loadProducts();
  }, [dispatch]);

  return (
    <div className="products-page">
      <h1>Products</h1>
      {/* Фильтры */}
      <Filters />
      {/* Список продуктов */}
      <ProductList />
    </div>
  );
};

export default Products;
