import './App.css';
import Header from './common/header/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pages from './pages/Pages';
import Data from './components/flashDeals/Data';
import { useState } from 'react';
import Cart from './common/cart/Cart';
import Sdata from './components/shop/Sdata';
import Footer from './common/fotter/Fotter';

function App() {
  const { productItems } = Data;
   const { shopItems } = Sdata;
  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };
  
  const decreaseQty = (product) =>{
     const productExit = cartItem.find((item) => item.id === product.id);
     if(productExit.qty ===1){
       setCardItem(cartItem.filter((item) => item.id !== product.id))
     }else{
      setCardItem(cartItem.map((item) => (item.id === product.id ? { ...productExit, qty: productExit.qty - 1 } : item)))

     }
  }

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages
                productItems={productItems}
                cartItem={cartItem}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          />  
          <Route
            path="/cart"
            element={<Cart cartItem={cartItem} addToCart={addToCart} decreaseQty={decreaseQty} />}
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;