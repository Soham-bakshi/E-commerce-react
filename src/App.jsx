import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import AddProduct from './components/AddProduct';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Error from './components/Error';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
