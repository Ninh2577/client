import React, { useEffect, useState } from "react";
import { Table, Tooltip, Button, Space, message } from "antd";
import { EyeTwoTone, DownloadOutlined } from "@ant-design/icons";
import axios from "axios";
import TimKiem from "./TimKiem_BienTheTour";
import ChiTietThanhToan from "./ChiTietThanhToan"; // Chi tiết
import dayjs from "dayjs";
import * as xlsx from "xlsx";

const columns = (handleChiTiet) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (_, __, index) => (
      <a href="#!" onClick={(e) => e.preventDefault()}>
        {index + 1}
      </a>
    ),
    width: 50,
  },
  {
    title: "Họ & Tên",
    dataIndex: ["nguoiDung", "hoTen"],
    key: "hoTen",
    ellipsis: { showTitle: false },
    render: (hoTen) => (
      <Tooltip placement="topLeft" title={hoTen}>
        {hoTen}
      </Tooltip>
    ),
  },
  {
    title: "Tên Tour",
    dataIndex: "tenTour",
    key: "tenTour",
    ellipsis: { showTitle: false },
    render: (tenTour) => (
      <Tooltip placement="topLeft" title={tenTour}>
        {tenTour}
      </Tooltip>
    ),
  },
  {
    title: "Tổng Tiền",
    dataIndex: "tongTien",
    key: "tongTien",
    ellipsis: { showTitle: false },
    render: (tongTien) => (
      <Tooltip
        placement="topLeft"
        title={new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(tongTien)}
      >
        {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
        }).format(tongTien)}
      </Tooltip>
    ),
  },
  {
    title: "Ngày Thanh Toán",
    dataIndex: "ngayThanhToan",
    key: "ngayThanhToan",
    ellipsis: { showTitle: false },
    render: (ngayThanhToan) => (
      <Tooltip placement="topLeft" title={ngayThanhToan}>
        {dayjs(ngayThanhToan).format("DD/MM/YYYY")}
      </Tooltip>
    ),
  },
  {
    title: "Trạng Thái",
    dataIndex: "trangThai",
    key: "trangThai",
    ellipsis: { showTitle: false },
    render: (trangThai) => (
      <Tooltip
        placement="topLeft"
        title={trangThai ? "Đã thanh toán" : "Chưa thanh toán"}
      >
        {trangThai ? "Đã thanh toán" : "Chưa thanh toán"}
      </Tooltip>
    ),
  },
  {
    title: "Phương Thức Thanh Toán",
    dataIndex: "phuongThucThanhToan",
    key: "phuongThucThanhToan",
    ellipsis: { showTitle: false },
    render: (phuongThucThanhToan) => (
      <Tooltip
        placement="topLeft"
        title={phuongThucThanhToan ? "Tiền mặt" : "Thanh toán online"}
      >
        {phuongThucThanhToan ? "Tiền mặt" : "Thanh toán online"}
      </Tooltip>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button icon={<EyeTwoTone />} onClick={() => handleChiTiet(record)} />
      </Space>
    ),
  },
];

const FormThanhToan = () => {
  const [data, setData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/thanh-toan"
        );
        setData(response.data);
      } catch (error) {
        message.error("Lỗi khi tải dữ liệu!");
      }
    };
    fetchData();
  }, []);

  const handleBack = () => {
    setVisible(false);
    setSelectedUserId(null);
  };

  const handleChiTiet = (record) => {
    setSelectedUserId(record.id);
    setVisible(true);
  };

  // Hàm xuất file Excel
  const exportToExcel = () => {
    const ws = xlsx.utils.json_to_sheet(data); // Chuyển đổi dữ liệu JSON thành sheet
    const wb = xlsx.utils.book_new(); // Tạo workbook mới
    xlsx.utils.book_append_sheet(wb, ws, "ThanhToan"); // Thêm sheet vào workbook

    // Lưu file Excel
    xlsx.writeFile(wb, "thanh_toan.xlsx");
  };

  return (
    <div className="container">
      <h3>Quản Lý Thanh Toán</h3>
      <TimKiem />
      <Button
        type="primary"
        icon={<DownloadOutlined />} // Icon tải xuống
        onClick={exportToExcel} // Gọi hàm xuất Excel
        style={{ marginBottom: 5 }} // Khoảng cách dưới nút
      >
        Xuất Excel
      </Button>
      <div className="table-container align-items-center mt-5">
        <Table
          columns={columns(handleChiTiet)}
          dataSource={data.map((item) => ({ ...item, key: item.id }))}
        />
      </div>
      <ChiTietThanhToan
        visible={visible}
        onBack={handleBack}
        paymentId={selectedUserId}
      />
    </div>
  );
};

export default FormThanhToan;
