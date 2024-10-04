import React, { FC } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import FlightCard, { FlightCardProps } from "@/components/FlightCard";
import ButtonPrimary from "@/shared/ButtonPrimary";

export interface SectionGridFilterCardProps {
  className?: string;
}

const DEMO_DATA: FlightCardProps["data"][] = [
  {
    id: "1",
    price: "3,500,000 VND",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
      name: "Ha Long Bay",
    },
  },
  {
    id: "2",
    price: "2,800,000 VND",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
      name: "Hoi An",
    },
  },
  {
    id: "3",
    price: "2,200,000 VND",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
      name: "Da Nang",
    },
  },
  {
    id: "1",
    price: "3,000,000 VND",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
      name: "Nha Trang",
    },
  },
  {
    id: "2",
    price: "4,200,000 VND",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
      name: "Ho Chi Minh City",
    },
  },
  {
    id: "1",
    price: "2,500,000 VND",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
      name: "Sapa",
    },
  },
  {
    id: "2",
    price: "2,900,000 VND",
    airlines: {
      logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
      name: "Ha Noi",
    },
  },
];

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2
        heading="Singapore - Tokyo"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            22 Chuyến bay
            <span className="mx-2">·</span>
            khứ hồi
            <span className="mx-2">·</span>2 khách
          </span>
        }
      />
      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6  rounded-3xl">
        {DEMO_DATA.map((item, index) => (
          <FlightCard key={index} data={item} />
        ))}

        <div className="flex mt-12 justify-center items-center">
          <ButtonPrimary loading>Xem thêm</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
