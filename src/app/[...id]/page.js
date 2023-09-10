import React from "react";

export default async function SingleProduct({ params }) {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  const filterdata = data.products.filter(
    (item) => item.id === JSON.parse(params.id[0])
  );
  console.log(filterdata);
  return (
    <div className="container mx-auto flex py-2">
      <img
        src={filterdata[0].thumbnail}
        className="w-1/2 h-[500px]"
        alt={filterdata[0].title}
      />
      <div className="ml-4">
        <p className="mt-4 ml-2 text-6xl text-green-500">
          {filterdata[0].title}
        </p>
        <p className="ml-2 text-4xl py-2 text-green-500">{filterdata[0].brand}</p>
        <p className="text-2xl py-2">Price:{filterdata[0].price}</p>
        <p className="text-2xl py-2">Description:{filterdata[0].description}</p>
      </div>
    </div>
  );
}
