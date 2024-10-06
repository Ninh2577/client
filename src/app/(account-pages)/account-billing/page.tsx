import React from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";

const AccountBilling = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Thanh toán & rút tiền</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="max-w-2xl">
        <span className="text-xl font-semibold block">Phương thức rút tiền</span>
        <br />
        <span className="text-neutral-700 dark:text-neutral-300 block">
          {` Khi bạn nhận được thanh toán cho một đặt phòng, chúng tôi gọi khoản thanh toán đó là "rút tiền". Hệ thống thanh toán an toàn của chúng tôi hỗ trợ nhiều phương thức rút tiền, có thể được thiết lập bên dưới. Xem thêm tại FAQ.`}
          <br />
          <br />
          Để nhận thanh toán, bạn cần thiết lập một phương thức rút tiền. Airbnb sẽ phát hành rút tiền khoảng 24 giờ sau khi khách check-in theo lịch trình. Thời gian để tiền xuất hiện trong tài khoản của bạn phụ thuộc vào phương thức rút tiền của bạn. Tìm hiểu thêm
        </span>
        <div className="pt-10">
          <ButtonPrimary>Thêm phương thức rút tiền</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountBilling;
