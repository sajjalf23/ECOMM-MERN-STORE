import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from '../Components/Title';

const Order = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="border-t pt-16">
      <div className="text-2xl mb-6">
        <Title text1="MY" text2="ORDERS" />
      </div>

      <div>
        {products.slice(1, 4).map((item) => (
          <div
            key={item._id}
            className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            {/* Product info */}
            <div className="flex items-start gap-6 text-sm sm:text-base">
              <img src={item.image[0]} alt={item.name} className="w-16 sm:w-20" />
              <div className="font-medium">
                <p>{item.name}</p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-base">
                  <p className="text-lg">
                    {currency}
                    {item.price}
                  </p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>
                  <p className="">
                    Date: <span className="text-gray-400">25-8-2024</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Status + Actions */}
            <div className="flex items-center justify-between md:w-1/2">
              <div className="flex items-center gap-2">
                <span className="min-w-2 h-2 rounded-full bg-green-500"></span>
                <p className="text-sm md:text-base">Ready To Ship</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100 transition">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

