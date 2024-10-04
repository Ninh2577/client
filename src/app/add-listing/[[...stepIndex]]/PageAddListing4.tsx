import React, { FC } from "react";
import Checkbox from "@/shared/Checkbox";

export interface PageAddListing4Props { }

const PageAddListing4: FC<PageAddListing4Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Amenities </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Nhiều khách hàng đã tìm kiếm chỗ ở dựa trên tiêu chí tiện nghi
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Tiện nghi chung
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Wifi" name="Wifi" defaultChecked />
            <Checkbox label="Internet" name="Internet" />
            <Checkbox label="Tivi"
              name="TV" defaultChecked />
            <Checkbox label="Điều hòa không khí" name="Air conditioning" />
            <Checkbox label="Quạt" name="Fan" />
            <Checkbox label="Lối vào riêng" name="Private entrance" />
            <Checkbox label="Máy sấy quần áo" name="Dryer" defaultChecked />
            <Checkbox label="Máy sưởi" name="Heater" />
            <Checkbox label="Máy giặt" name="Washing machine" />
            <Checkbox label="Chất tẩy rửa" name="Detergent" defaultChecked />
            <Checkbox label="Máy sấy quần áo" name="Clothes dryer" />
            <Checkbox label="Cũi em bé" name="Baby cot" />
            <Checkbox label="Bàn làm việc" name="Desk" defaultChecked />
            <Checkbox label="Tủ lạnh" name="Fridge" />
            <Checkbox label="Máy sấy quần áo" name="Dryer" defaultChecked />
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Tiện nghi khác
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Tủ quần áo" name="Wardrobe" defaultChecked />
            <Checkbox label="Móc treo quần áo" name="Cloth hook" />
            <Checkbox label="Đệm phụ" name="Extra cushion" defaultChecked />
            <Checkbox label="Bếp gas" name="Gas stove" />
            <Checkbox label="Giấy vệ sinh" name="Toilet paper" />
            <Checkbox label="Đồ vệ sinh cá nhân miễn phí" name="Free toiletries" defaultChecked />
            <Checkbox label="Bàn trang điểm" name="Makeup table" />
            <Checkbox label="Nồi lẩu" name="Hot pot" />
            <Checkbox label="Máy sưởi phòng tắm" name="Bathroom heaters" />
            <Checkbox label="Ấm siêu tốc" name="Kettle" defaultChecked />
            <Checkbox label="Máy rửa chén" name="Dishwasher" />
            <Checkbox label="Nướng BBQ" name="BBQ grill" defaultChecked />
            <Checkbox label="Máy nướng bánh mì" name="Toaster" defaultChecked />
            <Checkbox label="Khăn tắm" name="Towel" />
            <Checkbox label="Bàn ăn" name="Dining table" />
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Tiện nghi an toàn
          </label>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Checkbox label="Còi báo cháy" name="Fire siren" defaultChecked />
            <Checkbox label="bình chữa cháy" name="Fire extinguisher" />
            <Checkbox label="Khóa chống trộm" name="Anti-theft key" />
            <Checkbox label="Két an toàn" name="Safe vault" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing4;
