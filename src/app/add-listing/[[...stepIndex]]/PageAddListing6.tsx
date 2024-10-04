import React, { FC } from "react";
import Textarea from "@/shared/Textarea";

export interface PageAddListing6Props { }

const PageAddListing6: FC<PageAddListing6Props> = () => {
  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Mô tả địa điểm của bạn cho khách
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Hãy đề cập đến những đặc điểm tốt nhất của chỗ ở của bạn, bất kỳ tiện nghi đặc biệt nào như Wi-Fi nhanh hoặc bãi đậu xe, cũng như những điều bạn thích về khu vực lân cận.

        </span>
      </div>

      <Textarea placeholder="..." rows={14} />
    </>
  );
};

export default PageAddListing6;
