import React, { useState } from 'react';

const Checkout = () => {
  const [pin, setPin] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isPurchaseComplete, setIsPurchaseComplete] = useState(false);

  const handlePurchase = () => {
    if (pin && phone && email && address) {
      setIsPurchaseComplete(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  const handleBackToProducts = () => {
    window.location.reload();
  };

  if (isPurchaseComplete) {
    return (
      <div className="border rounded-lg p-4 sm:p-8 shadow-lg text-center bg-white max-w-md mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-green-600">Purchase Complete!</h2>
        <p className="mt-4 text-gray-700">Thank you for your order. We will contact you shortly.</p>
        <button
          onClick={handleBackToProducts}
          className="mt-6 bg-amber-800 text-white py-2 px-8 rounded-full hover:bg-amber-900 shadow-lg"
        >
          Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="border rounded-lg p-4 sm:p-8 shadow-lg bg-white max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-amber-800 mb-6">Checkout</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Address PIN Code</label>
        <input
          type="text"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700">Phone Number</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
        />
      </div>
      <button
        onClick={handlePurchase}
        className="w-full bg-green-500 text-white py-2 rounded-full hover:bg-green-600 shadow-md"
      >
        Complete Purchase
      </button>
    </div>
  );
};

export default Checkout;
