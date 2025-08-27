import React from 'react';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, addToCart }) => {
  return (
    <div className="border rounded-lg p-4 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
      <Image src={product.image} alt={product.name} width={500} height={300} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-amber-900">{product.name}</h2>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-lg font-semibold text-amber-800 mt-2">₹{product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 w-full bg-amber-800 text-white py-2 rounded-full hover:bg-amber-900 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
