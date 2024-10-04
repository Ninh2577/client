import React from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";

const AccountBilling = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Thanh toán</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="max-w-2xl">
        <span className="text-xl font-semibold block">Phương thức thanh toán</span>
        <br />
        <span className="text-neutral-700 dark:text-neutral-300 block">
          {` Khi bạn nhận được khoản thanh toán cho một lần đặt phòng, chúng tôi gọi khoản thanh toán đó cho bạn là "khoản thanh toán". Hệ thống thanh toán an toàn của chúng tôi hỗ trợ một số phương thức thanh toán, có thể được thiết lập bên dưới. Đi tới Câu hỏi thường gặp.`}
          <br />
          <br />
          Để được thanh toán, bạn cần thiết lập phương thức thanh toán Airbnb sẽ phát hành khoản thanh toán khoảng 24 giờ sau thời gian nhận phòng theo lịch trình của khách. Thời gian để tiền xuất hiện trong tài khoản của bạn phụ thuộc vào phương thức thanh toán của bạn. Tìm hiểu thêm
        </span>
        <div className="pt-10">
          <ButtonPrimary>Thêm phương thức thanh toán</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountBilling;
