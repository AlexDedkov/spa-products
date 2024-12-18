import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Adjusted import for HashRouter
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import CreateProduct from './components/CreateProduct';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      {/* Define all your routes here */}
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </Router>
  );
};

export default App;
