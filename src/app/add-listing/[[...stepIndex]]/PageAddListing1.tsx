import React, { FC } from "react";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing1Props {}

const PageAddListing1: FC<PageAddListing1Props> = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Chọn loại hình lưu trú</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <FormItem
          label="Chọn loại hình lưu trú"
          desc="Khách sạn: Các doanh nghiệp chuyên nghiệp về dịch vụ lưu trú, thường có phong cách hoặc chủ đề độc đáo định nghĩa thương hiệu và trang trí của họ."
        >
          <Select>
            <option value="Hotel">Khách sạn</option>
            <option value="Cottage">Nhà nghỉ</option>
            <option value="Villa">Biệt thự</option>
            <option value="Cabin">Nhà gỗ</option>
            <option value="Farm stay">Nông trại nghỉ dưỡng</option>
            <option value="Houseboat">Nhà thuyền</option>
            <option value="Lighthouse">Ngọn hải đăng</option>
          </Select>
        </FormItem>
        <FormItem
          label="Tên địa điểm"
          desc="Một tên hấp dẫn thường bao gồm: Tên nhà + Tên phòng + Đặc điểm nổi bật của bất động sản + Điểm đến du lịch"
        >
          <Input placeholder="Tên địa điểm" />
        </FormItem>
        <FormItem
          label="Loại hình cho thuê"
          desc="Toàn bộ nơi ở: Khách có toàn bộ nơi ở cho riêng mình—có lối vào riêng và không có không gian chung. Thường bao gồm một phòng ngủ, phòng tắm và nhà bếp."
        >
          <Select>
            <option value="Hotel">Toàn bộ nơi ở</option>
            <option value="Private room">Phòng riêng</option>
            <option value="Share room">Phòng chia sẻ</option>
          </Select>
        </FormItem>
      </div>
    </>
  );
};

export default PageAddListing1;
