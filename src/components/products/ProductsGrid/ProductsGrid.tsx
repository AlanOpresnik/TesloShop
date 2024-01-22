

import { Product } from "@/interfaces/Product.Interface";
import React from "react";
import ProductGridItem from "./ProductGridItem";

interface Props {
  products: Product[];
}

const ProductsGrid = ({ products }: Props) => {
   
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mb-10 ">
      {products.map((product) => (
        <ProductGridItem key={product.title} product={product} />
      ))}
    </div>
  );
};

export default ProductsGrid;
