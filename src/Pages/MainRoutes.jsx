import React from 'react';
import {Routes,Route} from "react-router-dom"
import Homepage from '../Components/Homepage/Homepage';
import Cart from './Cart/Cart';
import Checkout from './Checkout.jsx/Checkout';
import Payment from './Payment/Payment';
import PaymentSuccess from "./Payment/PaymentSuccess";
import Description from './Tour_Description/Description';


const MainRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/Description" element={<Description/>}></Route>
        <Route path="/Cart" element={<Cart />}></Route>
        <Route path="/Checkout" element={<Checkout />}></Route>
        <Route path="/Payment" element={<Payment />}></Route>
        <Route path="/PaymentSuccess" element={<PaymentSuccess />}></Route>
        </Routes>
    </div>
  );
}

export default MainRoutes