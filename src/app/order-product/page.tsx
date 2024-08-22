"use client";
import React from "react";
import { useRouter } from "next/navigation";

const OrderProduct = () => {
  const router = useRouter();
  function handleclick() {
    console.log("placing your order");
    router.back();
  }

  return (
    <>
      <div>OrderProduct</div>
      <button onClick={handleclick}>place order</button>
    </>
  );
};

export default OrderProduct;
