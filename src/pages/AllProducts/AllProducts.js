import React from "react";
import { useParams } from "react-router-dom";
import "./AllProducts.css";

const AllProducts = () => {
  const { mainCatId, subCatId } = useParams();

  console.log({ mainCatId, subCatId });
  return <div className="all-products-wrapper">All products</div>;
};

export default AllProducts;
