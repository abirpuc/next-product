import Image from "next/image";
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="border border-gray-400 rounded-lg bg-gray-200 p-2">
      <img
        src={product.thumbnail}
        className="w-full h-[300px] hover:scale-105 duration-200 rounded-lg"
        alt={product.title}
      />

      {/* <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
        /> */}
      <p className="mt-4 ml-2 text-2xl text-green-500">{product.title}</p>
      <p className="ml-2 text-2xl text-green-500">{product.brand}</p>
      <div className="w-1/2 mx-auto py-2">
        <button className="bg-purple-700 py-2 px-4 rounded-lg hover:bg-purple-500">
          View Details
        </button>
      </div>
    </div>
  );
}
