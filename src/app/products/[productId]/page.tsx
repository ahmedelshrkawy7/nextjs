import React from "react";

const ProductId = ({ params }) => {
  return (
    <div>
      <h1>{params.productId}</h1>
    </div>
  );
};

export default ProductId;
