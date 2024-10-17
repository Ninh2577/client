// https://www.youtube.com/watch?v=ycmK95xqe1k
import React, { useState, useEffect } from "react";
import { Table, Tooltip, Button, Space } from "antd";
import { EyeTwoTone } from "@ant-design/icons";
import TimKiem from "./TimKiem_BienTheTour";
import ChiTietDatTour from "./ChiTietDatTour.jsx";
import axios from "axios"; // Use axios for API calls

// Define table columns
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
    dataIndex: ["nguoiDung", "hoTen"], // Access nested property
    key: "hoTen",
    render: (hoTen) => <Tooltip title={hoTen}>{hoTen}</Tooltip>,
  },
  {
    title: "Ngày Đặt",
    dataIndex: "ngayDat",
    key: "ngayDat",
    render: (ngayDat) => (
      <Tooltip title={new Date(ngayDat).toLocaleDateString()}>
        {new Date(ngayDat).toLocaleDateString()}
      </Tooltip>
    ),
  },
  {
    title: "Tên Tour",
    dataIndex: ["tour", "tenTour"], // Access nested property
    key: "tenTour",
    render: (tenTour) => <Tooltip title={tenTour}>{tenTour}</Tooltip>,
  },
  {
    title: "Số Người",
    dataIndex: "soNguoi",
    key: "soNguoi",
    render: (soNguoi) => <Tooltip title={soNguoi}>{soNguoi}</Tooltip>,
  },
  {
    title: "Trạng Thái",
    dataIndex: "trangThai",
    key: "trangThai",
    render: (trangThai) => (
      <Tooltip title={trangThai ? "Đã thanh toán" : "Chưa thanh toán"}>
        {trangThai ? "Đã thanh toán" : "Chưa thanh toán"}
      </Tooltip>
    ),
  },
  {
    title: "Tiền",
    dataIndex: "tien",
    key: "tien",
    render: (tien) => (
      <Tooltip title={tien}>{tien.toLocaleString()} VND</Tooltip>
    ),
  },
  {
    title: "Tiền Giảm",
    dataIndex: "tienGiam",
    key: "tienGiam",
    render: (tienGiam) => (
      <Tooltip title={tienGiam}>{tienGiam.toLocaleString()} VND</Tooltip>
    ),
  },
  {
    title: "Tổng Tiền",
    dataIndex: "tongTien",
    key: "tongTien",
    render: (tongTien) => (
      <Tooltip title={tongTien}>{tongTien.toLocaleString()} VND</Tooltip>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        {/* View Details */}
        <Button icon={<EyeTwoTone />} onClick={() => handleChiTiet(record)} />
      </Space>
    ),
  },
];

const FormDatTour = () => {
  const [data, setData] = useState([]); // Store API data
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [visible, setVisible] = useState(false);
  // Fetch data from API
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/dat-tour") // Replace with your API URL
      .then((response) => {
        setData(response.data); // Set data from API
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const handleBack = () => {
    setVisible(false);
    setSelectedUserId(null);
  };
  const handleChiTiet = (record) => {
    setSelectedUserId(record.id);
    setVisible(true);
  };

  return (
    <div className="container">
      <h3>Quản Lý Đặt Tour</h3>
      <TimKiem />
      <Table columns={columns(handleChiTiet)} dataSource={data} />
      <ChiTietDatTour
        visible={visible}
        onBack={handleBack}
        paymentId={selectedUserId}
      />
    </div>
  );
};

export default FormDatTour;
