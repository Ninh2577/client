"use client";

import { Route } from "@/routers/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Nav = () => {
  const pathname = usePathname();

  const listNav: Route[] = [
    "/taikhoan",
    "/DSLuu",
    "/taikhoanmatkhau",
    "/taikhoanthanhtoan",
    // "/ForgotPassword",
    // "/Otp",
    // "/ResetPassword",
    // "/ChangePassword"
  ];

  const displayNames = {
    "/taikhoan": "Tài khoản",
    "/DSLuu": "Danh sách đã lưu",
    "/taikhoanmatkhau": "Mật khẩu",
    "/taikhoanthanhtoan": "Thanh toán",
  };

  return (
    <div className="container">
      <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
        {listNav.map((item) => {
          const isActive = pathname === item;
          return (
            <Link
              key={item}
              href={item}
              className={`block py-5 md:py-8 border-b-2 flex-shrink-0 capitalize ${isActive
                ? "border-primary-500 font-medium"
                : "border-transparent"
                }`}
            >
              {displayNames[item] || item.replace("-", " ").replace("/", " ")}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
