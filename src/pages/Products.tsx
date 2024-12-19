import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productsSlice';
import { RootState } from '../redux/store';
import axios from 'axios';

const Products: React.FC = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.products.items);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('/api/products'); // Замените на ваш URL API
      dispatch(setProducts(response.data));
    };

    fetchProducts();
  }, [dispatch]);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Products;
