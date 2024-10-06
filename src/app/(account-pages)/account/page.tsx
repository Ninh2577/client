"use client";  // Thêm dòng này để chỉ định rằng đây là Client Component

import React, { FC, useState } from "react";
import Label from "@/components/Label";
import Avatar from "@/shared/Avatar";
import ButtonPrimary from "@/shared/ButtonPrimary";
import Input from "@/shared/Input";
import Select from "@/shared/Select";

export interface AccountPageProps { }

const AccountPage: FC<AccountPageProps> = () => {
  // State to store the selected images
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [backImage, setBackImage] = useState<string | null>(null);

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl); // Set selected image URL
    }
  };

  // Function to handle image selection
  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setImage: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl);
    }
  };

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* HEADING */}
      <h2 className="text-3xl font-semibold">Thông tin tài khoản</h2>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
      <div className="flex flex-col md:flex-row">
        <div className="flex-shrink-0 flex items-start">
          <div className="relative w-32 h-32 bg-gray-200 rounded-full border border-gray-300 overflow-hidden flex items-center justify-center">
            {profileImage ? (
              <img
                src={profileImage}
                alt="Profile"
                className="object-cover w-full h-full rounded-full"
              />
            ) : (
              <Avatar sizeClass="w-32 h-32" />
            )}
            {!profileImage && ( // Chỉ hiển thị lớp này khi không có ảnh
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="mt-1 text-xs">Thay đổi hình ảnh</span>
              </div>
            )}
            <input type="file" accept="image/*" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleProfileImageChange} />
          </div>
        </div>

        <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
          <div>
            <Label>Họ tên</Label>
            <Input className="mt-1.5" placeholder="Nhập họ và tên" />
          </div>
          <div>
            <Label>Email</Label>
            <Input className="mt-1.5" placeholder="địa chỉ email" />
          </div>
          <div>
            <Label>Số điện thoại</Label>
            <Input className="mt-1.5" defaultValue="Nhập sdt" />
          </div>
          <div>
            <Label>Giới tính</Label>
            <Select className="mt-1.5">
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
            </Select>
          </div>
          <div className="max-w-lg">
            <Label>Năm sinh</Label>
            <Input className="mt-1.5" type="date" />
          </div>
          <div>
            <Label>Mật khẩu</Label>
            <Input className="mt-1.5" placeholder="************" />
          </div>
          <div>
            <Label>Địa chỉ</Label>
            <Input className="mt-1.5" placeholder="cần thơ" />
          </div>
          <div>
            <Label>Số CCCD</Label>
            <Input className="mt-1.5" placeholder="9823713731" />
          </div>

          <div className="flex justify-between">
            <div className="mr-4">
              <Label>Mặt trước CCCD</Label>
              <br />
              <div className="relative overflow-hidden flex items-center justify-center w-60 h-32 bg-gray-200 rounded-lg">
                {frontImage ? (
                  <img src={frontImage} alt="Front CCCD" className="object-cover w-full h-full" />
                ) : (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="mt-1 text-xs">Tải ảnh mặt trước</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleImageChange(e, setFrontImage)}
                />
              </div>
              <span className={`mt-1 text-center text-xs ${frontImage ? "" : "text-red-500"}`}>
                {frontImage ? "Mặt trước CCCD đã được tải lên." : "Chưa có hình ảnh."}
              </span>
            </div>
            <div style={{ transform: 'translateX(-130px)' }}>
              <Label>Mặt sau CCCD</Label>
              <br />
              <div className="relative overflow-hidden flex items-center justify-center w-60 h-32 bg-gray-200 rounded-lg">
                {backImage ? (
                  <img src={backImage} alt="Back CCCD" className="object-cover w-full h-full" />
                ) : (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="mt-1 text-xs">Tải ảnh mặt sau</span>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="absolute inset-0 opacity-0 cursor-pointer"
                  onChange={(e) => handleImageChange(e, setBackImage)}
                />
              </div>
              <span className={`mt-1 text-center text-xs ${backImage ? "" : "text-red-500"}`}>
                {backImage ? "Mặt sau CCCD đã được tải lên." : "Chưa có hình ảnh."}
              </span>            </div>
          </div>

          <ButtonPrimary >Lưu thông tin</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
