"use client";
import React, { useState } from "react";
import { Menu } from "antd";
import {
    AppstoreOutlined,
    TeamOutlined,
    CalendarOutlined,
    MailOutlined,
    SettingOutlined,
    CopyOutlined,
    SolutionOutlined,
    DollarOutlined,
} from "@ant-design/icons";
import Link from "next/link"; // Import Link từ Next.js

// Định nghĩa các mục menu với cấu trúc lồng nhau
const items = [
    {
        key: "sub1",
        label: "Quản Lý Người Dùng",
        icon: <TeamOutlined />,
        children: [
            { key: "nhan-vien", label: <Link href="/admin/nhan-vien">Nhân Viên</Link> },
            { key: "phan-quyen", label: <Link href="/admin/phan-quyen">Phân Quyền</Link> },
            { key: "khach-hang", label: <Link href="/admin/khach-hang">Khách Hàng</Link> },
        ],
    },
    { key: "bien-the-nguoi-dung", icon: <SolutionOutlined />, label: <Link href="/admin/bien-the-nguoi-dung">Biến Thể Người Dùng</Link> },
    { key: "quan-ly-tin-tuc", icon: <CalendarOutlined />, label: <Link href="/admin/quan-ly-tin-tuc">Quản Lý Tin Tức</Link> },
    {
        key: "sub1-2",
        label: "Quản Lý Thông Tin Tour",
        icon: <AppstoreOutlined />,
        children: [
            { key: "loai-tour", label: <Link href="/admin/loai-tour">Quản Lý Loại Tour</Link> },
            { key: "tour", label: <Link href="/admin/tour">Tour</Link> },
            { key: "bien-the-tour", label: <Link href="/admin/bien-the-tour">Biến Thể Tour</Link> },
            {
                key: "sub2-1",
                label: "Quản Lý Địa Điểm",
                children: [
                    { key: "dia-diem", label: <Link href="/admin/dia-diem">Địa Điểm</Link> },
                    { key: "lich-trinh-tour", label: <Link href="/admin/lich-trinh-tour">Lịch Trình Tour</Link> },
                ],
            },
        ],
    },
    { key: "danh-gia", icon: <CopyOutlined />, label: <Link href="/admin/danh-gia">Quản Lý Đánh Giá</Link> },
    { key: "dat-tour", icon: <MailOutlined />, label: <Link href="/admin/dat-tour">Quản Lý Đặt Tour</Link> },
    { key: "thanh-toan", icon: <DollarOutlined />, label: <Link href="/admin/thanh-toan">Thanh Toán</Link> },
    {
        key: "sub2",
        label: "Thống Kê",
        icon: <SettingOutlined />,
        children: [
            { key: "option7", label: <Link href="/admin/option7">Option 7</Link> },
            { key: "option8", label: <Link href="/admin/option8">Option 8</Link> },
            { key: "option9", label: <Link href="/admin/option9">Option 9</Link> },
            { key: "option10", label: <Link href="/admin/option10">Option 10</Link> },
        ],
    },
];


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [current, setCurrent] = useState("nhan-vien");

    // Xử lý sự kiện nhấp vào menu
    const handleClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <div className=" bg-slate-500">
            {/* Thanh menu ngang */}
            <div
                className=" bg-black"
                style={{
                    marginLeft: "270px", // Giữ khoảng trống bên trái cho sidebar
                    zIndex: 1000, // Đảm bảo nó trên cùng các phần tử khác
                    backgroundColor: "#fff", // Màu nền để tránh sự trong suốt
                    position: "fixed", // Giữ menu cố định
                }}
            >
                <Menu
                    selectedKeys={[current]}
                    mode="horizontal"
                    style={{ display: "flex", justifyContent: "space-between" }}
                />
            </div>

            {/* Menu bên trái (Sidebar) */}
            <div className="bg-red-400">
                <div
                    style={{
                        position: "fixed", // Giữ menu cố định
                        top: 0, // Canh trên cùng
                        left: 0,
                        width: "256px", // Đặt chiều rộng
                        height: "100vh", // Chiều cao full viewport
                        overflowY: "auto", // Cho phép cuộn nếu nội dung quá dài
                        padding: "0 18px",
                        marginTop: "10px",
                        background: "#fff", // Màu nền
                    }}
                >
                    <Menu
                        style={{ width: 256 }}
                        mode="inline"
                        items={items}
                        selectedKeys={[current]}
                        onClick={handleClick}
                    />
                </div>
            </div>

            {/* Nội dung hiển thị */}
            <div
                className="bg-blue-900"
                style={{ marginLeft: "-70px", marginTop: "120px" }}
            >
                sdfasdf
                {children}
            </div>
        </div>
    )
}
