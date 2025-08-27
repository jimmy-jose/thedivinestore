'use client';
import { useContext, useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { CartContext } from '@/lib/CartContext';
import Cart from '@/components/Cart';
import Checkout from '@/components/Checkout';

export default function Home() {
  const cartContext = useContext(CartContext);

  if (!cartContext) {
    throw new Error('CartContext must be used within a CartProvider');
  }

  const { cart, addToCart, removeFromCart, updateQuantity } = cartContext;
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCartVisibility = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <main className="container mx-auto p-4">
      {isCheckingOut ? (
        <Checkout />
      ) : (
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={toggleCartVisibility} className="bg-amber-800 text-white py-2 px-4 rounded-full">
              {isCartVisible ? 'Close Cart' : 'Open Cart'}
            </button>
          </div>
          <div className={`${isCartVisible ? 'block' : 'hidden'} md:block w-full md:w-1/4`}>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
              {cart.length > 0 && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setIsCheckingOut(true)}
                    className="bg-amber-800 text-white py-2 px-8 rounded-full hover:bg-amber-900 shadow-lg"
                  >
                    Checkout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
