import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home';
import Products from './component/products';
import Product_post from './component/product_post';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/home' element={<Home/>} />
    <Route path='/product' element={<Products />} />
    <Route path='/product/post' element={<Product_post />} />
    <Route path ="/*" element={<><h1>OOps!!! <br/> No Page Found!!!</h1></>}/>
    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
