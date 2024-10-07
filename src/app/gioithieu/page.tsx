import rightImg from "@/images/about-hero-right.png";
import React, { FC } from "react";
import NguoiSangTao from "./nguoisangtao";
import ThongKe from "./thongke";
import TieuDe from "./tieude";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import BackgroundSection from "@/components/BackgroundSection";
import SectionClientSay from "@/components/SectionClientSay";
import SectionSubscribe2 from "@/components/SectionSubscribe2";

export interface PageAboutProps {}

const PageAbout: FC<PageAboutProps> = ({}) => {
  return (
    <div className={`nc-PageAbout overflow-hidden relative`}>
      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <TieuDe
          rightImg={rightImg}
          heading="👋 Về chúng tôi"
          btnText=""
          subHeading="Về chúng tôi Chúng tôi là một tổ chức trung lập và độc lập, mỗi ngày chúng tôi tạo ra các chương trình và nội dung độc đáo, đẳng cấp thế giới nhằm cung cấp thông tin, giáo dục và giải trí cho hàng triệu người trên khắp thế giới."
        />

        <NguoiSangTao/>
        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>

        <ThongKe />

        <SectionSubscribe2 />
      </div>
    </div>
  );
};

export default PageAbout;
