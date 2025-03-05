import React from 'react';
import PurchaseForm from './PurchaseForm';
import { useCart } from '../state/CartProvider';

const Cart = () => {
  // Get cart items and functions from context
  const { cartItems, removeFromCart, getCartTotal, updateItemQuantity } = useCart();

  return (
    <div className="center mw7 mv4">
      <table className="f6 w-100 mw8 center" cellSpacing="0">
        <thead>
          <tr>
            <th className="fw6 tl pb3 pr3">Product</th>
            <th className="fw6 tl pb3 pr3">Description</th>
            <th className="fw6 tl pb3 pr3">Quantity</th>
            <th className="fw6 tr pb3 pr3">Price</th>
            <th className="fw6 tr pb3 pr3">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartItems && cartItems.map((item) => (
            <tr key={item._id}>
              <td className="tl pv2">{item.description}</td>
              <td className="tl pv2">{item.description ?? item.alt_description}</td>
              <td className="tr pv2">
                <a
                  className="pointer ba b--black-10 pv1 ph2 mr2"
                  onClick={() => updateItemQuantity(item._id, -1)}
                >
                  -
                </a>
                {item.quantity}
                <a
                  className="pointer ba b--black-10 pv1 ph2 ml2"
                  onClick={() => updateItemQuantity(item._id, 1)}
                >
                  +
                </a>
              </td>
              <td className="tr pv2">${item.price * item.quantity}</td>
              <td className="tr pv2">
                <a
                  className="pointer ba b--black-10 pv1 ph2"
                  onClick={() => removeFromCart(item)}
                >
                  Remove
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="tr f4 mv3">
        Total: ${getCartTotal().toFixed(2)}
      </div>
      <div className="flex justify-end pa3 mb3">
        <PurchaseForm />
      </div>
    </div>
  );
};

export default Cart;
