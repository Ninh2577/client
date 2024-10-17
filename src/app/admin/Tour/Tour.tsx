import React, { useState, useEffect } from "react";
import {
  Table,
  Tooltip,
  Button,
  Image,
  ConfigProvider,
  Space,
  message,
} from "antd";
import {
  AntDesignOutlined,
  DeleteOutlined,
  HighlightTwoTone,
} from "@ant-design/icons";
import TimKiem from "./TimKiem_Tour.jsx"; // Thành phần tìm kiếm
import ThemNhanVien from "./ThemTour.jsx"; // Thành phần thêm tour
import CapNhatTour from "./CapNhatTour.jsx"; // Thành phần cập nhật tour
import dayjs from "dayjs"; // Thư viện định dạng ngày tháng
import axios from "axios"; // Thư viện gọi API

// Cột dữ liệu của bảng
const columns = (showEditModal, handleDelete) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    fixed: "left",
    render: (_, __, index) => (
      <Tooltip placement="topLeft" title={index}>
        {index + 1}
      </Tooltip>
    ),
    width: 50,
  },
  {
    title: "Tên Tour",
    dataIndex: "tenTour",
    key: "tenTour",
    ellipsis: {
      showTitle: false,
    },
    render: (tenTour) => (
      <Tooltip placement="topLeft" title={tenTour}>
        {tenTour}
      </Tooltip>
    ),
  },
  {
    title: "Giá Tiền",
    dataIndex: "giaTour",
    key: "giaTour",
    ellipsis: { showTitle: false },
    render: (giaTour) => (
      <Tooltip
        placement="topLeft"
        title={new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(giaTour)}
      >
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(giaTour)}
      </Tooltip>
    ),
  },
  {
    title: "Ngày Bắt Đầu",
    dataIndex: "ngayBatDau",
    key: "ngayBatDau",
    ellipsis: {
      showTitle: false,
    },
    render: (ngayBatDau) => (
      <Tooltip placement="topLeft" title={ngayBatDau}>
        {dayjs(ngayBatDau).format("DD/MM/YYYY")}
      </Tooltip>
    ),
  },
  {
    title: "Ngày Kết Thúc",
    dataIndex: "ngayKetThuc",
    key: "ngayKetThuc",
    ellipsis: {
      showTitle: false,
    },
    render: (ngayKetThuc) => (
      <Tooltip placement="topLeft" title={ngayKetThuc}>
        {/* định dạng ngày tháng năm  */}
        {dayjs(ngayKetThuc).format("DD/MM/YYYY")}
      </Tooltip>
    ),
  },
  {
    title: "Số Lượng Người",
    dataIndex: "soLuongNguoi",
    key: "soLuongNguoi",
    width: 100,
  },
  {
    title: "Số Tour",
    dataIndex: "soTour",
    key: "soTour",
    width: 100,
  },
  {
    title: "Trạng Thái",
    dataIndex: "trangThai",
    key: "trangThai",
    render: (trangThai) => (trangThai ? "Còn" : "Hết"),
    width: 100,
  },
  {
    title: "Ảnh",
    dataIndex: "hinhAnh",
    key: "hinhAnh",
    render: (anh) => (
      <Image src={anh} alt="Profile" style={{ width: 50, height: 50 }} />
    ),
  },
  {
    title: "Video",
    dataIndex: "video",
    key: "video",
    render: (video) => (
      <iframe
        width="50"
        height="50"
        src={video}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
  },
  {
    title: "Loại Tour",
    dataIndex: "loaiTour",
    key: "loaiTour",
    ellipsis: {
      showTitle: false,
    },
    render: (loaiTour) => (
      <Tooltip placement="topLeft" title={loaiTour.loaiTour}>
        {loaiTour.loaiTour}
      </Tooltip>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* Nút Sửa */}
        <Button
          icon={<HighlightTwoTone />}
          onClick={() => showEditModal(record)} // Hiển thị modal với dữ liệu tour được chọn
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
const FormTour = () => {
  const [visible, setVisible] = useState(false); // Trạng thái hiển thị modal
  const [editingUser, setEditingUser] = useState(null); // Trạng thái tour đang chỉnh sửa
  const [data, setData] = useState([]); // Dữ liệu bảng

  useEffect(() => {
    // Hàm lấy dữ liệu từ API
    const fetchTours = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/tours");
        const tours = await response.json();

        // Sắp xếp theo id từ lớn đến nhỏ
        const sortedTours = tours.sort((a, b) => b.id - a.id);
        setData(sortedTours);
      } catch (error) {
        message.error("Tải dữ liệu thất bại.");
      }
    };
    fetchTours();
  }, []);
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      `Bạn có chắc chắn muốn xóa khách hàng với ID: ${id}?`
    );
    if (confirmDelete) {
      try {
        // Make the DELETE request to the backend
        await axios.delete(`http://localhost:8080/api/tours/delete/${id}`);

        // Remove the deleted user from the local state
        setData((prevData) => prevData.filter((user) => user.id !== id));

        message.success(`Đã xóa thành công: ${id}`); // Show success message
      } catch (error) {
        console.error("Lỗi khi xóa Tour:", error);
        message.error("Không thể xóa tour."); // Show error message
      }
    }
  };
  const handleUpdateSuccess = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tours");
      setData(response.data); // Cập nhật dữ liệu
      setVisible(false); // Đóng modal
      setEditingUser(null); // Xóa thông tin tour đang chỉnh sửa
    } catch (error) {
      message.error("Không thể tải dữ liệu từ server.");
    }
  };

  const showModal = () => {
    setVisible(true); // Mở modal thêm tour
  };

  const handleCancel = () => {
    setVisible(false); // Đóng modal
    setEditingUser(null); // Reset trạng thái sau khi đóng modal
  };

  const showEditModal = (tour) => {
    setEditingUser(tour); // Đặt tour đang được chỉnh sửa
    setVisible(true); // Mở modal
  };

  return (
    <div className="container">
      <h3>Danh Sách Tour</h3>
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
        <ThemNhanVien visible={visible} onCancel={handleCancel} />
      </ConfigProvider>
      {/* Tìm kiếm tour */}
      <TimKiem />
      {/* Bảng tour */}
      <div
        className="table-container align-items-center"
        style={{ marginRight: "-100px" }}
      >
        <Table
          columns={columns(showEditModal, handleDelete)}
          scroll={{ x: 1800 }}
          dataSource={data} // Map dữ liệu API vào bảng
          rowKey="id" // Đặt rowKey là id
        />
      </div>
      {/* Modal cập nhật tour */}
      {editingUser && (
        <CapNhatTour
          visible={visible}
          onCancel={handleCancel}
          userData={editingUser} // Tên biến truyền vào model phải trùng
          onUpdateSuccess={handleUpdateSuccess} // Gọi callback khi thành công
        />
      )}
    </div>
  );
};

export default FormTour;
