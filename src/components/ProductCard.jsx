import React from "react";

const ProductCard = ({ src, price, name, description }) => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
       
        * {
            font-family: 'Poppins', sans-serif;
        }
      `}</style>

      <div className="flex flex-col bg-white shadow-md w-72">
        <img className="w-72 h-48 object-cover" src={src} alt={name} />
        <div className="p-4 text-sm">
          <p className="text-slate-600">$ {price.toFixed(2)}</p>
          <p className="text-slate-800 text-base font-medium my-1.5">{name}</p>
          <p className="text-slate-500">{description}</p>
          <div className="grid grid-cols-2 gap-2 mt-3">
            <button className="bg-slate-100 text-slate-600 py-2">
              Add to cart
            </button>
            <button className="bg-slate-800 text-white py-2">Buy now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
