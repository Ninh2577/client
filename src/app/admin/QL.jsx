import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { Menu } from "antd";
import NhanVienForm from "./NguoiDung/NhanVien"; // Import form Nhân Viên
import KhachHangForm from "./NguoiDung/KhachHang"; // Import form Khách Hàng
import PhanQuyenForm from "./NguoiDung/PhanQuyen"; // Import form Phân Quyền
import LoaiTourForm from "./LoaiTour/LoaiTour"; // Import form Loại Tour
import QuanLyTinTuc from "./TinTuc/QuanLyTinTuc"; //Import form Quản lý tin tức
import QuanLyBienTheTour from "./bien-the-tour/QuanLyBienTheTour"; //Import from Biến thể Tour
import DiaDiem from "./DiaDiem/DiaDiem"; //import from địa điểm
import LichTrinhTour from "./LichTrinhTour/LichTrinhTour"; //import from LichTrinh tour
import Tour from "./Tour/Tour"; //import from Tour
import DanhGia from "./DanhGia/DanhGia"; //import from DanhGia tour
import DatTour from "./DatTour/DatTour"; //import from Dặt tour
import BienTheNguoiDung from "./BienTheNguoiDung/BienTheNguoiDung"; //import from BienTheNguoiDung
import ThanhToan from "./ThanhToan/ThanhToan"; //import from ThanhToan
import "./NguoiDung/Css/NhanVien.css";

// Define menu items with nested structure
const items = [
  {
    key: "sub1",
    label: "Quản Lý Người Dùng",
    icon: <TeamOutlined />,
    children: [
      {
        key: "1",
        label: "Nhân Viên",
      },
      {
        key: "2",
        label: "Phân Quyền",
      },
      {
        key: "3",
        label: "Khách Hàng",
      },
    ],
  },
  {
    key: "4",
    icon: <SolutionOutlined />,
    label: "Biến Thể Người Dùng",
  },
  {
    key: "5",
    icon: <CalendarOutlined />,
    label: "Quản Lý Tin Tức",
  },
  {
    key: "sub1-2",
    label: "Quản Lý Thông Tin Tour",
    icon: <AppstoreOutlined />,
    children: [
      {
        key: "6",
        label: "Quản Lý Loại Tour",
      },
      {
        key: "7",
        label: "Tour",
      },
      {
        key: "8",
        label: "Biến Thể Tour",
      },
      {
        key: "sub2-1",
        label: "Quản Lý Địa Điểm",
        children: [
          {
            key: "9",
            label: "Địa Điểm",
          },
          {
            key: "10",
            label: "Lịch Trình Tour",
          },
        ],
      },
    ],
  },
  {
    key: "11",
    icon: <CopyOutlined />,
    label: "Quản Lý Đánh Giá",
  },
  {
    key: "12",
    icon: <MailOutlined />,
    label: "Quản Lý Đặt Tour",
  },
  {
    key: "13",
    icon: <DollarOutlined />,
    label: "Thanh Toán",
  },
  {
    key: "sub2",
    label: "Thống Kê",
    icon: <SettingOutlined />,
    children: [
      {
        key: "14",
        label: "Option 7",
      },
      {
        key: "15",
        label: "Option 8",
      },
      {
        key: "16",
        label: "Option 9",
      },
      {
        key: "17",
        label: "Option 10",
      },
    ],
  },
];
const item = [
  {
    label: (
      <div style={{ height: "50px", fontFamily: "initial" }}>
        <h2>TRAVEL</h2>
      </div>
    ),
    key: "",
  },
  {
    label: "Nguyễn Hoàng Ninh",
    key: "SubMenu",
    style: { marginRight: "auto" },
    children: [
      {
        type: "group",
        label: "Item 1",
        children: [
          {
            label: "Option 1",
            key: "setting:1",
          },
        ],
      },
    ],
  },
];
// Helper function to get the level of menu keys
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

const FormQL = () => {
  const [current, setCurrent] = useState("mail");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  const [selectedKey, setSelectedKey] = useState(null);
  const [stateOpenKeys, setStateOpenKeys] = useState(["sub1", "sub1-2"]);

  // Handle menu item click
  const handleClick = (e) => {
    setSelectedKey(e.key);
  };

  // Render the appropriate form based on selected key
  const renderForm = () => {
    switch (selectedKey) {
      case "1":
        return <NhanVienForm />;
      case "2":
        return <PhanQuyenForm />;
      case "3":
        return <KhachHangForm />;
      case "4":
        return <BienTheNguoiDung />;
      case "5":
        return <QuanLyTinTuc />;
      case "6":
        return <LoaiTourForm />;
      case "7":
        return <Tour />;
      case "8":
        return <QuanLyBienTheTour />;
      case "9":
        return <DiaDiem />;
      case "10":
        return <LichTrinhTour />;
      case "11":
        return <DanhGia />;
      case "12":
        return <DatTour />;
      case "13":
        return <ThanhToan />;
      default:
        return <div>Chọn một mục từ menu.</div>;
    }
  };

  // Handle open/close state of submenus
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <div className="row">
      <div
        className="col-lg-12"
        style={{
          marginLeft: "270px", // Move the top menu to the right, leaving space for the sidebar
          zIndex: 1000, // Ensure it's on top of other elements
          backgroundColor: "#fff", // Background to avoid transparency
          position: "fixed", // Keep the menu fixed
        }}
      >
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          items={item}
          style={{ display: "flex", justifyContent: "space-between" }} // Thêm dòng này
        />
      </div>
      <div className="col-lg-3">
        <div
          style={{
            position: "fixed", // Keep the menu fixed
            top: 0, // Align it to the top of the screen
            left: 0,
            width: "256px", // Set the width
            height: "100vh", // Set the height to full viewport height
            overflowY: "auto", // Allow scrolling if content is too long
            padding: "0 18px",
            marginTop: "10px",
            background: "#fff", // Background color
          }}
        >
          <Menu
            style={{ width: 256 }}
            mode="inline" // Fixed mode to "inline" as there's no need to switch
            theme="light" // Fixed theme to "light" as there's no need to switch
            items={items}
            openKeys={stateOpenKeys}
            onOpenChange={onOpenChange}
            onClick={handleClick}
          />
        </div>
      </div>
      <div
        className="col-lg-9"
        style={{ marginLeft: "-70px", marginTop: "120px" }}
      >
        {renderForm()} {/* Hiển thị form tương ứng */}
      </div>
    </div>
  );
};

export default FormQL;
