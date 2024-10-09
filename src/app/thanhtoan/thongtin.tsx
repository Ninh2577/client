"use client";

import React, { useState } from "react";
import Label from "@/components/Label";
import Select from "@/shared/Select";
import Input from "@/shared/Input";

const ThongTin: React.FC = () => {
  const [hoTen, setHoTen] = useState("");
  const [email, setEmail] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [gioiTinh, setGioiTinh] = useState("Male");
  const [namSinh, setNamSinh] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [soCCCD, setSoCCCD] = useState("");
  const [soluong, setSoLuong] = useState(1);
  const [tongSoLuong, setTongSoLuong] = useState(2); // Tổng số thông tin cần nhập

  const handlePageClick = (pageNumber: number) => {
    setSoLuong(pageNumber);
    clearForm();
  };

  const clearForm = () => {
    setHoTen("");
    setEmail("");
    setSoDienThoai("");
    setGioiTinh("Male");
    setNamSinh("");
    setDiaChi("");
    setSoCCCD("");
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      hoTen,
      email,
      soDienThoai,
      gioiTinh,
      namSinh,
      diaChi,
      soCCCD,
    });
  };

  return (
    <div className="listingSection__wrap flex flex-col items-center justify-center max-w-md mx-auto md:flex-row md:max-w-lg md:space-x-4">
      <div className="w-full md:w-auto">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Thông tin người dùng
        </h2>
      </div>
      <span className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-1">
        Nhập thông tin của khách hàng thứ {soluong}/{tongSoLuong}
      </span>
      <div className="w-14 border-b border-neutral-200 dark:border-neutral-700 mx-auto"></div>

      {/* FORM */}
      <div className="flow-root mt-1 w-full">
        <form
          className="text-sm sm:text-base text-neutral-6000 dark:text-neutral-300 space-y-4"
          onSubmit={handleCheckout}
        >
          <div className="p-2 rounded-lg">
            <Label>Họ tên</Label>
            <Input
              className="mt-1"
              placeholder="Nhập họ và tên"
              value={hoTen}
              onChange={(e) => setHoTen(e.target.value)}
            />
          </div>
          <div className="p-2 rounded-lg">
            <Label>Email</Label>
            <Input
              className="mt-1"
              placeholder="địa chỉ email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-2 rounded-lg">
            <Label>Số điện thoại</Label>
            <Input
              className="mt-1"
              placeholder="Nhập số điện thoại"
              value={soDienThoai}
              onChange={(e) => setSoDienThoai(e.target.value)}
            />
          </div>
          <div className="p-2 rounded-lg">
            <Label>Giới tính</Label>
            <Select
              className="mt-1"
              value={gioiTinh}
              onChange={(e) => setGioiTinh(e.target.value)}
            >
              <option value="Male">Nam</option>
              <option value="Female">Nữ</option>
            </Select>
          </div>
          <div className="p-2 rounded-lg">
            <Label>Năm sinh</Label>
            <Input
              className="mt-1"
              type="date"
              value={namSinh}
              onChange={(e) => setNamSinh(e.target.value)}
            />
          </div>
          <div className="p-2 rounded-lg">
            <Label>Địa chỉ</Label>
            <Input
              className="mt-1"
              placeholder="Nhập địa chỉ"
              value={diaChi}
              onChange={(e) => setDiaChi(e.target.value)}
            />
          </div>
          <div className="p-2 rounded-lg">
            <Label>Số CCCD</Label>
            <Input
              className="mt-1"
              placeholder="Nhập số CCCD"
              value={soCCCD}
              onChange={(e) => setSoCCCD(e.target.value)}
            />
          </div>
        </form>
              
        {tongSoLuong > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: tongSoLuong }, (_, index) => (
              <button
                key={index + 1}
                type="button"
                className={`py-2 px-4 rounded ${
                  soluong === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-300 text-gray-800"
                }`}
                onClick={() => handlePageClick(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThongTin;
