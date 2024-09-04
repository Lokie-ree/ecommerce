import React from "react";
import { FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="w-full h-[80px] bg-white border-b">
      <div className="md:max-w-[1024px] max-w-[600px] mx-auto w-full h-full flex justify-between items-center p-6">
        <h1 className="font-moderustic font-bold text-2xl">Shop</h1>
        <FiShoppingBag size={24} />
      </div>
    </div>
  );
};

export default Navbar;
