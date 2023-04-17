import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ProductsList from './components/ProductsList';
import ProductDetail from './components/ProductDetail';
import AddProduct from './components/AddProduct';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Error from './components/Error';
import Cart from './components/Cart';

// client side routing (react router 6)
function App() {
  return (
    <div>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
        <Navbar />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="productdetail/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<Error message="page does not exist!" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
