import React from "react";
import SectionHero from "@/app/(server-components)/SectionHero";
import BgGlassmorphism from "@/components/BgGlassmorphism";
import { TaxonomyType } from "@/data/types";
import SectionSliderNewCategories from "@/components/SectionSliderNewCategories";
import SectionOurFeatures from "@/components/SectionOurFeatures";
import BackgroundSection from "@/components/BackgroundSection";
import SectionGridFeaturePlaces from "@/components/SectionGridFeaturePlaces";
import SectionHowItWork from "@/components/SectionHowItWork";
import SectionSubscribe2 from "@/components/SectionSubscribe2";
import SectionGridAuthorBox from "@/components/SectionGridAuthorBox";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox";
import SectionBecomeAnAuthor from "@/components/SectionBecomeAnAuthor";
import SectionVideos from "@/components/SectionVideos";
import SectionClientSay from "@/components/SectionClientSay";

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "New York",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Singapore",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Paris",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Luân Đôn",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Tokyo",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Maldives",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Ý",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const DEMO_CATS_2: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Tận hưởng cái lạnh tuyệt vời",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Ngủ theo cách nổi trên nước",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Trong ngôi nhà của tỷ phú",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Mát lạnh trong rừng sâu",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Trong ngôi nhà của tỷ phú",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Trong ngôi nhà của tỷ phú",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/9828170/pexels-photo-9828170.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Mát lạnh trong rừng sâu",
    taxonomy: "category",
    count: 188288,
    thumbnail:
      "https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];


function PageHome() {
  return (
    <main className="nc-PageHome relative overflow-hidden">
      {/* GLASSMOPHIN */}
      <BgGlassmorphism />

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        {/* SECTION HERO */}
        <SectionHero className="pt-10 lg:pt-16 lg:pb-16" />

        {/* SECTION 1 */}
        <SectionSliderNewCategories categories={DEMO_CATS} />

        <SectionOurFeatures />

        <SectionGridFeaturePlaces cardType="card2" />

        <SectionHowItWork />

        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black/20" />
          <SectionSliderNewCategories
            categories={DEMO_CATS_2}
            categoryCardType="card4"
            itemPerRow={4}
            heading="Suggestions for discovery"
            subHeading="Popular places to stay that Chisfis recommends for you"
            sliderStyle="style2"
          />
        </div>

        <SectionSubscribe2 />

        <div className="relative py-16">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>

        <SectionGridCategoryBox />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        <SectionSliderNewCategories
          heading="Explore by types of stays"
          subHeading="Explore houses based on 10 types of stays"
          categoryCardType="card5"
          itemPerRow={5}
        />

        <SectionVideos />

        <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay />
        </div>
      </div>
    </main>
  );
}

export default PageHome;
