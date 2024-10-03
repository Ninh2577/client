import React, { FC } from "react";
import rightImgPng from "@/images/our-features.png";
import Image, { StaticImageData } from "next/image";
import Badge from "@/shared/Badge";

export interface SectionOurFeaturesProps {
  className?: string;
  rightImg?: StaticImageData;
  type?: "type1" | "type2";
}

const SectionOurFeatures: FC<SectionOurFeaturesProps> = ({
  className = "lg:py-14",
  rightImg = rightImgPng,
  type = "type1",
}) => {
  return (
    <div
      className={`nc-SectionOurFeatures relative flex flex-col items-center ${
        type === "type1" ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${className}`}
      data-nc-id="SectionOurFeatures"
    >
      <div className="flex-grow">
        <Image src={rightImg} alt="" />
      </div>
      <div
        className={`max-w-2xl flex-shrink-0 mt-10 lg:mt-0 lg:w-2/5 ${
          type === "type1" ? "lg:pl-16" : "lg:pr-16"
        }`}
      >
        <span className="uppercase text-sm text-gray-400 tracking-widest">
          Lợi ích
        </span>
        <h2 className="font-semibold text-4xl mt-5">Thành phố sôi động</h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Advertising" />
            <span className="block text-xl font-semibold">
            Quảng cáo hiệu quả
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Với danh sách miễn phí, bạn có thể quảng cáo cho tài sản cho thuê của mình
            mà không cần chi phí trước
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Exposure " />
            <span className="block text-xl font-semibold">
            Đạt được hàng triệu lượt tiếp cận với Chisfis
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Hàng triệu người đang tìm kiếm những nơi ở độc đáo trên toàn thế giới
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Secure" />
            <span className="block text-xl font-semibold">
            An toàn và đơn giản
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Danh sách cho thuê trên Holiday Lettings cung cấp cho bạn một cách an
            toàn và dễ dàng để nhận đặt phòng và thanh toán trực tuyến
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
