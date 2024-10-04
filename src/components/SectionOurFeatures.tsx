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
          Hồ Chí Minh
        </span>
        <h2 className="font-semibold text-4xl mt-5">Các thành phố đang diễn ra</h2>

        <ul className="space-y-10 mt-16">
          <li className="space-y-4">
            <Badge name="Advertising" />
            <span className="block text-xl font-semibold">
            Quảng cáo tiết kiệm chi phí
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Với trang thông tin miễn phí, bạn có thể quảng cáo cho thuê của mình mà không cần trả trước
            Chi phí
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="green" name="Exposure " />
            <span className="block text-xl font-semibold">
            Tiếp cận hàng triệu người với Chisfis
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Hàng triệu người đang tìm kiếm những nơi độc đáo để ở xung quanh
            Thế giới
            </span>
          </li>
          <li className="space-y-4">
            <Badge color="red" name="Secure" />
            <span className="block text-xl font-semibold">
              Secure and simple
            </span>
            <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
            Danh sách Holiday Lettings cung cấp cho bạn một cách an toàn và dễ dàng để thực hiện
            Đặt chỗ và thanh toán trực tuyến
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SectionOurFeatures;
