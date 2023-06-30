import React, { useState } from "react";
import Navigation from "./Navigation";
import Content from "./Content";

const App = () => {
  const [selectedContent, setSelectedContent] = useState("home");

  const handleItemClick = (item) => {
    setSelectedContent(item);
  };

  return (
    <div className="flex">
      <div className="w-1/5 bg-gray-200 p-4">
        <Navigation onItemClick={handleItemClick} />
      </div>
      <div className="p-10 bg-orange-500 w-screen h-screen text-white flex">
        <Content selectedContent={selectedContent} />
      </div>
    </div>
  );
};

export default App;
