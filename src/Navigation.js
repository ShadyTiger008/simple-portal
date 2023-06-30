import React, { useState } from "react";

const Navigation = ({ onItemClick }) => {
  const items = ["home", "contact", "information", "guide"];

  return (
    <div className="h-screen w-1/5 bg-gray-200 fixed top-0 left-0 p-4">
      {items.map((item) => (
        <a
          key={item}
          onClick={() => onItemClick(item)}
          className="block mb-4 font-bold text-orange-500 cursor-pointer hover:underline"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </div>
  );
};

export default Navigation;
