import React, { FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing8Props { }

const PageAddListing8: FC<PageAddListing8Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Đặt giá cho không gian của bạn</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {`     Doanh thu của chủ nhà phụ thuộc trực tiếp vào việc thiết lập giá và quy định về số lượng khách, số đêm và chính sách hủy đặt phòng.
`}
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <FormItem label="Tiền   
 tệ">
          <Select>
            <option value="USD">USD</option>
            <option value="VND">VND</option>
            <option value="EURRO">EURRO</option>
          </Select>
        </FormItem>
        <FormItem label="Giá cơ bản (Thứ Hai - Thứ Năm)">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <Input className="!pl-8 !pr-10" placeholder="0.00" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </FormItem>
        {/* ----- */}
        <FormItem label=" cơ bản (Thứ Năm - Chủ Nhật)">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <Input className="!pl-8 !pr-10" placeholder="0.00" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">USD</span>
            </div>
          </div>
        </FormItem>
        {/* ----- */}
        <FormItem label="Giá   
 dài hạn (Giảm giá hàng tháng) ">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500">%</span>
            </div>
            <Input className="!pl-8 !pr-10" placeholder="0.00" />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span className="text-gray-500">mỗi   
              tháng</span>
            </div>
          </div>
        </FormItem>
      </div>
    </>
  );
};

export default PageAddListing8;
