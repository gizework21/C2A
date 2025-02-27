"use client";
import React, { useState } from "react";
import { products } from "./productsData";
import { Heart, Share, Star } from "lucide-react";
import Pagination from "./paginaiton";
import Image from "next/image";

const ProductCardList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page: any) => {
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto py-10">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Phones For You</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-[#d7a022] shadow-md rounded-lg p-4 w-full max-w-xs mx-auto relative"
            >
              {product.discount && (
                <div className="bg-red-500 text-white px-2 py-1 text-xs rounded absolute top-2 left-2">
                  30% Off
                </div>
              )}
              <img
                src={product.image}
                alt={product.name}
                className="h-48 w-full object-cover rounded-t-md"
              />
              <div className="mt-4">
                <h2 className="text-gray-900 font-bold text-lg">
                  {product.name}
                </h2>
                <div className="flex items-center text-sm text-[#cbcbcb]">
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star
                      key={index}
                      className={
                        index < product.rating
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2">(No reviews Yet)</span>
                </div>
                <div className="text-xl font-black">
                  {product.discount ? (
                    <>
                      <span className="line-through text-gray-500">
                        ${product.originalPrice}
                      </span>
                      <span className="ml-3">${product.price}</span>
                    </>
                  ) : (
                    <span>${product.price}</span>
                  )}
                </div>
              </div>
              <div className="flex justify-between mt-4">
                <button className=" px-3 py-0.5 relative rounded-md text-[#d69f22] font-semibold">
                  <span className="absolute inset-0 bg-[#d69f22] opacity-10 rounded-md"></span>
                  <span className="relative font-bold">Add To Cart</span>
                </button>

                <button className="p-2 relative rounded-md  text-[#d69f22] font-semibold">
                  <span className="absolute inset-0 bg-[#d69f22] opacity-10 rounded-md"></span>
                  <span className="relative font-bold">
                    <Heart />
                  </span>
                </button>

                <button className="p-2 relative rounded-md  text-[#d69f22] font-semibold">
                  <span className="absolute inset-0 bg-[#d69f22] opacity-10 rounded-md"></span>
                  <span className="relative font-bold">
                    <Share />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={1}
          totalPages={products.length}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ProductCardList;
