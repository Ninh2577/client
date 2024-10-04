import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";

export interface PageAddListing5Props { }

const PageAddListing5: FC<PageAddListing5Props> = () => {
  const renderRadio = (
    name: string,
    id: string,
    label: string,
    defaultChecked?: boolean
  ) => {
    return (
      <div className="flex items-center">
        <input
          defaultChecked={defaultChecked}
          id={id + name}
          name={name}
          type="radio"
          className="focus:ring-primary-500 h-6 w-6 text-primary-500 border-neutral-300 !checked:bg-primary-500 bg-transparent"
        />
        <label
          htmlFor={id + name}
          className="ml-3 block text-sm font-medium text-neutral-700 dark:text-neutral-300"
        >
          {label}
        </label>
      </div>
    );
  };

  const renderNoInclude = (text: string) => {
    return (
      <div className="flex items-center justify-between py-3">
        <span className="text-neutral-6000 dark:text-neutral-400 font-medium">
          {text}
        </span>
        <i className="text-2xl text-neutral-400 las la-times-circle hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"></i>
      </div>
    );
  };

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">
          Thiết lập quy định cho khách của bạn{" "}
        </h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          Khách phải đồng ý với quy định của bạn trước khi đặt phòng.
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
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Smoking", "Do", "Không cho phép")}
            {renderRadio("Smoking", "Allow", "Cho phép", true)}
            {renderRadio("Smoking", "Charge", "Phí")}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Thú nuôi
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Pet", "Do", "Không cho phép")}
            {renderRadio("Pet", "Allow", "Cho phép", true)}
            {renderRadio("Pet", "Charge", "Phí")}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Tổ chức tiệc
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Partyorganizing", "Do", "Không cho phép")}
            {renderRadio("Partyorganizing", "Allow", "Cho phép", true)}
            {renderRadio("Partyorganizing", "Charge", "Phí")}
          </div>
        </div>

        {/* ITEM */}
        <div>
          <label className="text-lg font-semibold" htmlFor="">
            Nấu ăn
          </label>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {renderRadio("Cooking", "Do", "Không cho phép")}
            {renderRadio("Cooking", "Allow", "Cho phép", true)}
            {renderRadio("Cooking", "Charge", "Phí")}
          </div>
        </div>

        {/* ----------- */}
        <div className=" border-b border-neutral-200 dark:border-neutral-700"></div>
        <span className="block text-lg font-semibold">Quy
          định bổ sung</span>
        <div className="flow-root">
          <div className="-my-3 divide-y divide-neutral-100 dark:divide-neutral-800">
            {renderNoInclude("Không hút thuốc ở khu vực chung")}
            {renderNoInclude("Không mang giày dép vào nhà")}
            {renderNoInclude("Không nấu ăn trong phòng ngủ")}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:justify-between space-y-3 sm:space-y-0 sm:space-x-5">
          <Input className="!h-full" placeholder="Không   
 hút thuốc..." />
          <ButtonPrimary className="flex-shrink-0">
            <i className="text-xl las la-plus"></i>
            <span className="ml-3">Thêm thẻ</span>
          </ButtonPrimary>
        </div>
      </div>
    </>
  );
};

export default PageAddListing5;
