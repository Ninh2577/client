import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import {
  Table,
  Tooltip,
  Button,
  ConfigProvider,
  Image,
  Space,
  message,
} from "antd";
import {
  AntDesignOutlined,
  DeleteOutlined,
  HighlightTwoTone,
  EyeTwoTone,
} from "@ant-design/icons";
import dayjs from "dayjs";
import FormTimKiemVaSapXepKhachHang from "./TimKiemKhachHang.jsx";
import "./Css/NhanVien.css";
import ThemKhachHang from "./ThemKhachHang.jsx";
import ChiTietNguoiDung from "./ChiTietNguoiDung.jsx";
import CapNhatKhachHang from "./CapNhatKhachHang.jsx";
const formatCCCD = (cccd) => {
  // Kiểm tra xem mã có đúng định dạng không
  if (!cccd || cccd.length !== 12) return cccd; // Trả lại mã nếu không hợp lệ

  // Chia mã thành các phần và định dạng
  return `${cccd.slice(0, 4)}-${cccd.slice(4, 7)}-${cccd.slice(
    7,
    9
  )}-${cccd.slice(9)}`;
};
const calculateAge = (birthYear) => {
  if (!birthYear) return null; // Trả về null nếu không có năm sinh
  const currentYear = dayjs().year(); // Lấy năm hiện tại
  return currentYear - dayjs(birthYear).year(); // Tính tuổi
};

// Cột dữ liệu của bảng
const columns = (showEditModal, handleDelete, handleChiTiet) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    render: (_, __, index) => (
      <a href="#!" onClick={(e) => e.preventDefault()}>
        {index + 1}
      </a>
    ),
    width: 50,
  },
  {
    title: "Họ & Tên",
    dataIndex: "hoTen",
    key: "hoTen",
    ellipsis: {
      showTitle: false,
    },
    render: (hoTen) => (
      <Tooltip placement="topLeft" title={hoTen}>
        {hoTen}
      </Tooltip>
    ),
  },
  {
    title: "Ngày Sinh",
    dataIndex: "namSinh",
    key: "namSinh",
    width: 120,
    render: (namSinh) => (
      <Tooltip placement="topLeft" title={namSinh}>
        {dayjs(namSinh).format("DD/MM/YYYY")} {/* Định dạng ngày ở đây */}
      </Tooltip>
    ),
  },
  {
    title: "Tuổi",
    dataIndex: "namSinh", // Thay đổi dataIndex thành năm sinh
    key: "tuoi",
    render: (namSinh) => {
      const age = calculateAge(namSinh); // Tính tuổi từ năm sinh
      return (
        <a href="#!" onClick={(e) => e.preventDefault()}>
          {age} {/* Hiển thị tuổi */}
        </a>
      );
    },
    width: 100,
  },
  {
    title: "Số Điện Thoại",
    dataIndex: "soDienThoai",
    key: "soDienThoai",
    width: 150,
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    ellipsis: {
      showTitle: false,
    },
    render: (email) => (
      <Tooltip placement="topLeft" title={email}>
        {email}
      </Tooltip>
    ),
  },
  {
    title: "Địa chỉ",
    dataIndex: "diaChi",
    key: "diaChi",
    ellipsis: {
      showTitle: false,
    },
    render: (diaChi) => (
      <Tooltip placement="topLeft" title={diaChi}>
        {diaChi}
      </Tooltip>
    ),
  },
  {
    title: "Giới Tính",
    dataIndex: "gioiTinh",
    key: "gioiTinh",
    ellipsis: {
      showTitle: false,
    },
    render: (gioiTinh) => (
      <Tooltip placement="topLeft" title={gioiTinh ? "Nam" : "Nữ"}>
        {gioiTinh ? "Nam" : "Nữ"}
      </Tooltip>
    ),
  },
  {
    title: "Vai Trò",
    dataIndex: "vaiTro",
    key: "vaiTro",
    ellipsis: {
      showTitle: false,
    },
    render: (vaiTro) => (
      <Tooltip placement="topLeft" title={vaiTro?.vaiTro || "Chưa có vai trò"}>
        {vaiTro?.vaiTro || "Chưa có vai trò"}
      </Tooltip>
    ),
  },
  {
    title: "Mã CCCD",
    dataIndex: "cccd",
    key: "cccd",
    ellipsis: {
      showTitle: false,
    },
    render: (cccd) => (
      <Tooltip placement="topLeft" title={cccd}>
        {formatCCCD(cccd)}
      </Tooltip>
    ),
  },
  {
    title: "Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (hinhAnh) => (
      <Image src={hinhAnh} alt="Profile" style={{ width: 50, height: 50 }} />
    ),
  },
  {
    title: "Ảnh CCCD Mặt Trước",
    dataIndex: "anhCCCDtruoc",
    key: "anhCCCDtruoc",
    render: (anhCCCDtruoc) => (
      <Image
        src={anhCCCDtruoc}
        alt="CCCD Front"
        style={{ width: 50, height: 50 }}
      />
    ),
  },
  {
    title: "Ảnh CCCD Mặt Sau",
    dataIndex: "anhCCCDsau",
    key: "anhCCCDsau",
    render: (anhCCCDsau) => (
      <Image
        src={anhCCCDsau}
        alt="CCCD Back"
        style={{ width: 50, height: 50 }}
      />
    ),
  },
  {
    title: "",
    key: "action",
    fixed: "right",
    render: (_, record) => (
      <Space size="middle">
        {/* Nút xem chi tiết */}
        <Button
          icon={<EyeTwoTone />}
          onClick={() => handleChiTiet(record)} // Hiển thị modal xem chi tiết
        ></Button>

        {/* Nút Sửa */}
        <Button
          icon={<HighlightTwoTone />}
          onClick={() => showEditModal(record)} // Hiển thị modal với dữ liệu người dùng được chọn
        ></Button>

        {/* Nút Xóa */}
        <Button
          icon={<DeleteOutlined />}
          danger
          onClick={() => handleDelete(record.id)} // Gọi hàm xóa
        ></Button>
      </Space>
    ),
  },
];

// Component chính
const KhachHangForm = () => {
  const [visible, setVisible] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [data, setData] = useState([]); // Trạng thái lưu trữ dữ liệu
  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    // Gọi API khi component được tải
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/nguoidung?vaiTroId=2"
        );
        setData(response.data); // Lưu trữ dữ liệu vào state
      } catch (error) {
        console.error("Lỗi khi tải dữ liệu:", error);
        message.error("Không thể tải dữ liệu từ server."); // Hiển thị thông báo lỗi
      }
    };

    fetchData();
  }, []); // Chạy một lần khi component được tải
  const handleUpdate = (updatedData) => {
    setData(updatedData); // Update the table data
  };

  const showModal = () => {
    setVisible(true);
  };

  // Xử lý xem chi tiết
  const handleChiTiet = (record) => {
    setSelectedUserId(record.id); // Lưu ID người dùng đã chọn vào state
    setVisible(true); // Hiển thị modal chi tiết người dùng
  };

  const handleCancel = () => {
    setVisible(false);
    setEditingUser(null);
  };

  const showEditModal = (user) => {
    setEditingUser(user);
    setVisible(true);
  };
  // Hàm xử lý quay lại (đóng modal)
  const handleBack = () => {
    setVisible(false);
    setSelectedUserId(null); // Xóa ID người dùng đã chọn
  };
  const handleUpdateSuccess = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8080/api/nguoidung?vaiTroId=2"
      );
      setData(response.data); // Update the data state
      setVisible(false); // Close the modal
      setEditingUser(null); // Clear the editing user
      handleUpdateSuccess();
    } catch (error) {
      message.error("Không thể tải dữ liệu từ server.");
    }
  };
  // Hàm xử lý xóa và hiển thị thông báo
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `Bạn có chắc chắn muốn xóa khách hàng với ID: ${id}?`
    );
    if (confirmDelete) {
      try {
        // Make the DELETE request to the backend
        await axios.delete(`http://localhost:8080/api/nguoidung/delete/${id}`);

        // Remove the deleted user from the local state
        setData((prevData) => prevData.filter((user) => user.id !== id));

        message.success(`Đã xóa thành công: ${id}`); // Show success message
      } catch (error) {
        console.error("Lỗi khi xóa khách hàng:", error);
        message.error("Không thể xóa khách hàng."); // Show error message
      }
    }
  };

  // Remove the earlier declaration of handleDelete here

  return (
    <div className="container">
      <h3>Danh Sách Khách Hàng </h3>

      {/* Nút "Thêm" */}
      <ConfigProvider>
        <Space>
          <Button
            className="nguoidung-them"
            type="primary"
            size="large"
            icon={<AntDesignOutlined />}
            onClick={showModal}
          >
            Thêm
          </Button>
        </Space>
        <ThemKhachHang visible={visible} onCancel={handleCancel} />
      </ConfigProvider>

      {/* Tìm kiếm người dùng */}
      <FormTimKiemVaSapXepKhachHang onUpdate={handleUpdate} />

      {/* Bảng người dùng */}
      <div
        className="table-container align-items-center"
        style={{ marginRight: "-100px" }}
      >
        <Table
          columns={columns(showEditModal, handleDelete, handleChiTiet)}
          scroll={{ x: 2100 }}
          dataSource={data}
          rowKey="id"
        />
      </div>

      {/* Các phần khác , Hàm cập nhật người dùng  */}
      {editingUser && (
        <CapNhatKhachHang
          visible={visible}
          onCancel={handleCancel}
          userData={editingUser} // Pass the editing user data
          onUpdateSuccess={handleUpdateSuccess} // Pass the callback
        />
      )}

      {/* Modal chi tiết người dùng */}
      <ChiTietNguoiDung
        visible={visible}
        onCancel={handleCancel}
        onBack={handleBack}
        userId={selectedUserId}
      />
    </div>
  );
};

export default KhachHangForm;
