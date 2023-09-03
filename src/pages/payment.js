import React from 'react';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import {cartItems} from '../components/Products/index'
import {menuItems} from '../components/MenuCompo/index'
import '../styles/Payment.css'


export default function App() {
    let menuTotal = 0
    let cartTotal = 0

    cartItems.map(item => {
        const price = item.price.slice(1)
        return cartTotal = cartTotal + parseInt(price)
    })
    console.log(cartTotal)
    
    menuItems.map(item => {
        const price = item.price.slice(1)
        return menuTotal = menuTotal + parseInt(price)
    })


  const config = {
    public_key: 'FLWPUBK_TEST-9163a8bc245a1652bc602e3fb0fb10d3-X',
    tx_ref: Date.now(),
    amount: menuTotal + cartTotal,
    currency: 'GHS',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: 'craxybaboon6@gmail.com',
       phone_number: '0591464265',
      name: 'Daily Bite',
    },
    customizations: {
      title: 'The Daily Bite Restaurant',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="App">
     <h1>Complete Payment</h1>

      <button
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
        Payment with FlutterWave     </button>
    </div>
  );
}