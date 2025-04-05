import React from "react";

const NavBar = () => {
  return (
    <div className="w-full" >
      <div className="bg-white flex-grow p-4 shadow-md flex flex-col md:flex-row justify-between items-center mb-5 rounded">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded w-full md:w-1/2"
        />
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <span>Aarohi Shah (Admin)</span>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
