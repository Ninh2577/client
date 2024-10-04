import NcInputNumber from "@/components/NcInputNumber";
import React, { FC } from "react";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing3Props { }

const PageAddListing3: FC<PageAddListing3Props> = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Kích thước của địa điểm của bạn</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        {/* ITEM */}
        <FormItem label="Diện   
 tích (m2)">
          <Select>
            <option value="100">100</option>
            <option value="200">200</option>
            <option value="300">300</option>
            <option value="400">400</option>
            <option value="500">500</option>
          </Select>
        </FormItem>
        <NcInputNumber label="Phòng ngủ" defaultValue={4} />
        <NcInputNumber label="Giường" defaultValue={4} />
        <NcInputNumber label="Phòng tắm" defaultValue={2} />
        <NcInputNumber label="Nhà bếp" defaultValue={2} />
      </div>
    </>
  );
};

export default PageAddListing3;
