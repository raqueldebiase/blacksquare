// src/app/cart/page.tsx
import React from 'react';

const CartPage = () => {
  return (
    <section className="my-8">
      <h2 className="text-xl font-semibold">Items in your cart</h2>
      <div className="bg-white p-4 rounded shadow mt-4">
        {/* Placeholder for cart items */}
        <p>No items in your cart.</p>
      </div>
    </section>
  );
};

export default CartPage;
