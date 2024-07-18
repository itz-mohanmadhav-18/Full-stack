import React from "react";
import "../index.css";

function Card(data) {
  return (
    <div className="w-60 flex flex-col gap-3 relative hover:shadow-md p-3">
      {data.onSale && (
        <div className="absolute -top-3 -right-3 bg-red-500 text-white text-xs font-bold rounded-full w-10 h-10 flex items-center justify-center z-10">
          Sale
        </div>
      )}
      <div className="w-full h-60 hover:scale-105">
        <img src={data.imageLink} alt="Product" className="w-full h-full object-cover"/>
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-gray-400 text-xs">{data.category}</p>
        <h3 className="font-bold text-xs">{data.title}</h3>
        <div className="flex h-3"> 
          <img src="https://img.icons8.com/?size=100&id=104&format=png&color=FA5252" alt="Star" className="h-full" />
          <img src="https://img.icons8.com/?size=100&id=104&format=png&color=FA5252" alt="Star" className="h-full"/>
          <img src="https://img.icons8.com/?size=100&id=104&format=png&color=FA5252" alt="Star" className="h-full"/>
          <img src="https://img.icons8.com/?size=100&id=104&format=png&color=FA5252" alt="Star" className="h-full"/>
          <img src="https://img.icons8.com/?size=100&id=104&format=png&color=FA5252" alt="Star" className="h-full"/>
        </div>
        <p className="text-xs font-bold">{data.price}</p>
      </div>
    </div>
  );
}

export default Card;