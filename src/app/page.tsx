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

  return (
    <main className="container mx-auto p-4">
      <header className="text-center my-8">
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-amber-800">St. Alphonsa&apos;s Divine Store</h1>
        <p className="text-base sm:text-lg text-amber-700">Your one-stop shop for divine items</p>
      </header>
      {isCheckingOut ? (
        <Checkout />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          <div className="mt-8">
            <Cart cart={cart} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
          </div>
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
        </>
      )}
    </main>
  );
}
