"use client"; // Đảm bảo component này được xử lý như Client Component

import React, { useState } from "react";
import ThongTin from "./thongtin";
import CheckOutPagePageMain from "./PageMain";

const Page = () => {
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout(true); // Đặt trạng thái là true khi bấm nút thanh toán
  };

  const handleBack = () => {
    setIsCheckout(false); // Đặt trạng thái là false khi bấm nút quay lại
  };

  return (
    <div className="flex flex-col items-center">
      {!isCheckout ? ( 
        <>
          <ThongTin />
          <button 
            onClick={handleCheckout} 
            className="mt-4 mb-4 bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center" 
          > 
            <span className="text-2xl">&#x2794;</span> {/* Mũi tên chuyển tiếp */}
          </button>
        </>
      ) : (
        <>
          <CheckOutPagePageMain />
          <button 
            onClick={handleBack} 
            className="mt-4 mb-4 bg-blue-500 text-white rounded-full w-16 h-16 flex items-center justify-center"
          >
            <span className="text-2xl">&#x2190;</span> {/* Mũi tên quay lại */}
          </button>
        </>
      )}
    </div>
  );
};

export default Page;
