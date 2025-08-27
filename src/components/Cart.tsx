import React from 'react';
import Image from 'next/image';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  cart: CartItem[];
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, removeFromCart, updateQuantity }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white">
      <h2 className="text-2xl font-bold text-amber-800 mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 pb-4 border-b border-gray-200">
              <div className="flex items-center">
                <Image src={item.image} alt={item.name} width={60} height={60} className="rounded" />
                <div className="ml-4">
                  <h3 className="font-bold text-amber-900">{item.name}</h3>
                  <p className="text-gray-600">₹{item.price}</p>
                </div>
              </div>
              <div className="flex items-center mt-4 sm:mt-0 self-end sm:self-center">
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="w-16 text-center border rounded border-gray-300"
                />
                <button onClick={() => removeFromCart(item.id)} className="ml-4 text-red-500 hover:text-red-700">
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="text-right font-bold text-xl text-amber-800 mt-4">Total: ₹{total.toFixed(2)}</div>
        </>
      )}
    </div>
  );
};

export default Cart;
