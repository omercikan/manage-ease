import React from "react";
import { Product } from "../../types/type";
import ProductItem from "./ProductItem";

type productListProps = {
  productsData: Product[];
};

const ProductList: React.FC<productListProps> = ({ productsData }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      {productsData?.map((product, index) => (
        <ProductItem product={product} key={index} />
      ))}
    </div>
  );
};

export default ProductList;
