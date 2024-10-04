"use client";

import { MapPinIcon } from "@heroicons/react/24/solid";
import LocationMarker from "@/components/AnyReactComponent/LocationMarker";
import Label from "@/components/Label";
import GoogleMapReact from "google-map-react";
import React, { FC } from "react";
import ButtonSecondary from "@/shared/ButtonSecondary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";
import FormItem from "../FormItem";

export interface PageAddListing2Props { }

const PageAddListing2: FC<PageAddListing2Props> = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold">Vị trí của địa điểm của bạn</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* FORM */}
      <div className="space-y-8">
        <ButtonSecondary>
          <MapPinIcon className="w-5 h-5 text-neutral-500 dark:text-neutral-400" />
          <span className="ml-3">Sử dụng vị trí hiện tại</span>
        </ButtonSecondary>
        {/* ITEM */}
        <FormItem label="Country/Region">
          <Select>
            <option value="Viet Nam">Việt Nam</option>
            <option value="Thailand">Thái Lan</option>
            <option value="France">Pháp</option>
            <option value="Singapore">Singapore</option>
            <option value="Jappan">Nhật Bản</option>
            <option value="Korea">Hàn Quốc</option>
            <option value="...">...</option>
          </Select>
        </FormItem>
        <FormItem label="Đường phố">
          <Input placeholder="..." />
        </FormItem>
        <FormItem label="Số phòng (tùy chọn)">
          <Input />
        </FormItem>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-5">
          <FormItem label="Thành phố">
            <Input />
          </FormItem>
          <FormItem label="Tỉnh/bang">
            <Input />
          </FormItem>
          <FormItem label="Mã bưu điện">
            <Input />
          </FormItem>
        </div>
        <div>
          <Label>Địa chỉ chi tiết</Label>
          <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          179 Đ. Nguyễn Văn Cừ, Phường An Khánh, Ninh Kiều, Cần Thơ, Việt Nam
          </span>
          <div className="mt-4">
            <div className="aspect-w-5 aspect-h-5 sm:aspect-h-3">
              <div className="rounded-xl overflow-hidden">
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyAGVJfZMAKYfZ71nzL_v5i3LjTTWnCYwTY",
                  }}
                  yesIWantToUseGoogleMapApiInternals
                  defaultZoom={15}
                  defaultCenter={{
                    lat: 55.9607277,
                    lng: 36.2172614,
                  }}
                >
                  <LocationMarker lat={55.9607277} lng={36.2172614} />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageAddListing2;
