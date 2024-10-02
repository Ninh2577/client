import BackgroundSection from "@/components/BackgroundSection";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import React, { ReactNode } from "react";
import SectionHero2ArchivePage from "../(server-components)/SectionHero2ArchivePage";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="nc-ListingRealEstateMapPage">
      <div className="container pb-24 lg:pb-28">
        <SectionHero2ArchivePage />
      </div>

      {children}

      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Khám phá theo loại hình lưu trú"
            subHeading="Khám phá những ngôi nhà dựa trên 10 loại hình lưu trú"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 className="py-24 lg:py-28" />

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-28">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default Layout;
