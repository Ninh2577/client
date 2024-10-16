import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
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
import "bootstrap/dist/css/bootstrap.min.css";
import "./NguoiDung/Css/NhanVien.css";

// Định nghĩa các mục menu với cấu trúc lồng nhau
const items = [
  {
    key: "sub1",
    label: "Quản Lý Người Dùng",
    icon: <TeamOutlined />,
    children: [
      { key: "nhan-vien", label: "Nhân Viên" },
      { key: "phan-quyen", label: "Phân Quyền" },
      { key: "khach-hang", label: "Khách Hàng" },
    ],
  },
  { key: "bien-the-nguoi-dung", icon: <SolutionOutlined />, label: "Biến Thể Người Dùng" },
  { key: "quan-ly-tin-tuc", icon: <CalendarOutlined />, label: "Quản Lý Tin Tức" },
  {
    key: "sub1-2",
    label: "Quản Lý Thông Tin Tour",
    icon: <AppstoreOutlined />,
    children: [
      { key: "loai-tour", label: "Quản Lý Loại Tour" },
      { key: "tour", label: "Tour" },
      { key: "bien-the-tour", label: "Biến Thể Tour" },
      {
        key: "sub2-1",
        label: "Quản Lý Địa Điểm",
        children: [
          { key: "dia-diem", label: "Địa Điểm" },
          { key: "lich-trinh-tour", label: "Lịch Trình Tour" },
        ],
      },
    ],
  },
  { key: "danh-gia", icon: <CopyOutlined />, label: "Quản Lý Đánh Giá" },
  { key: "dat-tour", icon: <MailOutlined />, label: "Quản Lý Đặt Tour" },
  { key: "thanh-toan", icon: <DollarOutlined />, label: "Thanh Toán" },
  {
    key: "sub2",
    label: "Thống Kê",
    icon: <SettingOutlined />,
    children: [
      { key: "option7", label: "Option 7" },
      { key: "option8", label: "Option 8" },
      { key: "option9", label: "Option 9" },
      { key: "option10", label: "Option 10" },
    ],
  },
];

export const Admin = () => {
  const [current, setCurrent] = useState("nhan-vien");
  const navigate = useNavigate();

  // Xử lý sự kiện nhấp vào menu
  const handleClick = (e) => {
    setCurrent(e.key);
    navigate(`/admin/${e.key}`); // Chuyển hướng đến route tương ứng
  };

  return (
    <div className="row">
      {/* Thanh menu ngang */}
      <div
        className="col-lg-12"
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
      <div className="col-lg-3">
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
        className="col-lg-9"
        style={{ marginLeft: "-70px", marginTop: "120px" }}
      >
          {/* Thêm Outlet để hiển thị các route con */}
          <Outlet />
      </div>
    </div>
  );
};
