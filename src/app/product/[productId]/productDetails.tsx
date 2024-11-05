"use client";
import React from "react";
import Image from "next/image";
import Rating from "@/app/components/rating/rating";
interface productDetailsprops {
  product: any;
}

export type cartProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  brand: string;
  category: string;
  inStock: boolean;
  selectedImg: selectedImgType;
  quantity: number;

  reviews: [{ rating: number; comment: string }];
};

export type selectedImgType = {
  color: string;
  colorCode: string;
  image: string;
};
const Horizontal = () => {
  return <hr className="w-[30%] my-2"></hr>;
};
const productDetails: React.FC<productDetailsprops> = ({ product }) => {
  const productRating =
    product.reviews.reduce((acc: any, item: any) => item.rating + acc, 0) /
    product.reviews.length;
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <Image
            src={product.images[0].image}
            width={100}
            height={100}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col gap-1 text-slate-500 text-sm">
          <h2 className="text-3xl font-medium text-slate-700">
            {product.name}
          </h2>
          <div className="flex items-center gap-2">
            <Rating value={productRating} readOnly />
            <div>{product.reviews.length}reviews</div>
          </div>
          <Horizontal />
          <div className="text-justify">{product.description}</div>
          <Horizontal />
          <div>
            <span className="font-semibold">CATEGORY:</span>
            {product.category}
          </div>

          <div>
            <span className="font-semibold">BRAND:</span>
            {product.brand}
          </div>

          <div className={product.inStock ? "text-green-500" : "text-red-500"}>
            {product.inStock ? "In Stock" : "Out of Stock"}
          </div>
          <Horizontal />
          <div>currentColor</div>
          <Horizontal />
          <div>quantity</div>
          <Horizontal />
          <div>button</div>
        </div>
      </div>
    </>
  );
};

export default productDetails;
