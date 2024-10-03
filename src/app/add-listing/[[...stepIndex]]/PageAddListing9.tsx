"use client";

import DatePickerCustomDay from "@/components/DatePickerCustomDay";
import DatePickerCustomHeaderTwoMonth from "@/components/DatePickerCustomHeaderTwoMonth";
import NcInputNumber from "@/components/NcInputNumber";
import React, { FC, useState } from "react";
import DatePicker from "react-datepicker";

export interface PageAddListing9Props {}

const PageAddListing9: FC<PageAddListing9Props> = () => {
  const [dates, setDates] = useState<number[]>([
    new Date("2023/02/06").getTime(),
    new Date("2023/02/09").getTime(),
    new Date("2023/02/15").getTime(),
  ]);

  return (
    <>
      <div>
        <h2 className="text-2xl font-semibold">Thời gian khách có thể lưu trú</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
          {`     Chuyến đi ngắn hơn có thể có nhiều đặt phòng hơn, nhưng bạn sẽ phải chuyển chỗ ở thường xuyên hơn.
`}
        </span>
      </div>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-7">
        {/* ITEM */}
        <NcInputNumber label="Số đêm tối thiểu" defaultValue={1} />
        <NcInputNumber label="Số đêm tối đa" defaultValue={99} />
      </div>

      {/*  */}
      <div>
        <h2 className="text-2xl font-semibold">Thiết lập tính sẵn có của bạn</h2>
        <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
        Chỉnh sửa lịch của bạn rất dễ dàng—chỉ cần chọn một ngày để chặn hoặc mở khóa nó. Bạn luôn có thể thay đổi sau khi xuất bản.

        </span>
      </div>

      <div className="addListingDatePickerExclude">
        <DatePicker
          onChange={(date) => {
            let newDates = [];

            if (!date) {
              return;
            }
            const newTime = date.getTime();
            if (dates.includes(newTime)) {
              newDates = dates.filter((item) => item !== newTime);
            } else {
              newDates = [...dates, newTime];
            }
            setDates(newDates);
          }}
          // selected={startDate}
          monthsShown={2}
          showPopperArrow={false}
          excludeDates={dates.filter(Boolean).map((item) => new Date(item))}
          inline
          renderCustomHeader={(p) => <DatePickerCustomHeaderTwoMonth {...p} />}
          renderDayContents={(day, date) => (
            <DatePickerCustomDay dayOfMonth={day} date={date} />
          )}
        />
      </div>
    </>
  );
};

export default PageAddListing9;
