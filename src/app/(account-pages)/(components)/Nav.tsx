"use client";

import { Route } from "@/routers/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const Nav = () => {
  const pathname = usePathname();

  const listNav: Route[] = [
    "/account",
    "/account-savelists",
    "/account-password",
    "/account-billing",
  ];

  const displayNames = {
    "/account": "Tài khoản",
    "/account-savelists": "Danh sách đã lưu",
    "/account-password": "Mật khẩu",
    "/account-billing": "Thanh toán",
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
              className={`block py-5 md:py-8 border-b-2 flex-shrink-0 capitalize ${
                isActive
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
