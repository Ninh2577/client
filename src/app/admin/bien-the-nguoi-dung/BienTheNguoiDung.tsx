// import React, { useState } from "react";
// import { Table, Tooltip, ConfigProvider, Button, Space, message } from "antd";
// import {
//   DeleteOutlined,
//   AntDesignOutlined,
//   HighlightTwoTone,
// } from "@ant-design/icons";
// import TimKiem from "./TimKiem_BienTheTour";
// import CapNhatBienTheTour from "./CapNhatBienTheNguoiDung";
// import ThemBienTheNguoiDung from "./ThemBienTheNguoiDung";

// // Cột dữ liệu của bảng
// const columns = (showEditModal, handleDelete) => [
//   {
//     title: "ID",
//     dataIndex: "id",
//     key: "id",
//     render: (text) => (
//       <a href="#!" onClick={(e) => e.preventDefault()}>
//         {text}
//       </a>
//     ),
//     width: 50,
//   },
//   {
//     title: "Họ & Tên",
//     dataIndex: "hoTen",
//     key: "hoTen",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (hoTen) => (
//       <Tooltip placement="topLeft" title={hoTen}>
//         {hoTen}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "Email",
//     dataIndex: "email",
//     key: "email",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (email) => (
//       <Tooltip placement="topLeft" title={email}>
//         {email}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "Số Điện Thoại",
//     dataIndex: "soDienThoai",
//     key: "soDienThoai",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (soDienThoai) => (
//       <Tooltip placement="topLeft" title={soDienThoai}>
//         {soDienThoai}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "Mã Căn Cước Công Dân",
//     dataIndex: "cccd",
//     key: "cccd",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (cccd) => (
//       <Tooltip placement="topLeft" title={cccd}>
//         {cccd}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "Mã Đặt Tour",
//     dataIndex: "idDatTour",
//     key: "idDatTour",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (idDatTour) => (
//       <Tooltip placement="topLeft" title={idDatTour}>
//         {idDatTour}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "Mô Tả",
//     dataIndex: "moTa",
//     key: "moTa",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (moTa) => (
//       <Tooltip placement="topLeft" title={moTa}>
//         {moTa}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         {/* Nút Sửa */}
//         <Button
//           icon={<HighlightTwoTone />}
//           onClick={() => showEditModal(record)} // Hiển thị modal chỉnh sửa
//         ></Button>

//         {/* Nút Xóa */}
//         <Button
//           icon={<DeleteOutlined />}
//           danger
//           onClick={() => handleDelete(record.id)} // Gọi hàm xóa
//         ></Button>
//       </Space>
//     ),
//   },
// ];

// // Dữ liệu mẫu
// const data = [
//   {
//     id: "1",
//     hoTen: "Nguyễn Văn A",
//     email: "01/01/2024",
//     soDienThoai: "Du lịch gia đình",
//     cccd: 1,
//     idDatTour: "true",
//     moTa: "abc",
//   },
// ];

// // Component chính
// const FormBienTheNguoiDung = () => {
//   const [visibleEdit, setVisibleEdit] = useState(false);
//   const [editingUser, setEditingUser] = useState(null); // Trạng thái người dùng đang chỉnh sửa
//   const showModalEdit = () => {
//     setVisibleEdit(true);
//   };

//   // Đóng modal chỉnh sửa
//   const handleCancelEdit = () => {
//     setVisibleEdit(false);
//     setEditingUser(null); // Reset trạng thái người dùng sau khi đóng modal
//   };

//   // Hiển thị modal chỉnh sửa
//   const showEditModal = (user) => {
//     setEditingUser(user); // Đặt người dùng đang được chỉnh sửa
//     setVisibleEdit(true); // Mở modal chỉnh sửa
//   };

//   // Hàm xử lý xóa và hiển thị thông báo
//   const handleDelete = (id) => {
//     const confirmDelete = window.confirm(
//       `Bạn có chắc chắn muốn xóa Biến Thể Tour này với ID: ${id}?`
//     );
//     if (confirmDelete) {
//       message.success(`Đã xóa thành công: ${id}`); // Hiển thị thông báo
//       // Logic xóa người dùng khỏi dữ liệu nếu cần
//     }
//   };

//   return (
//     <div className="container">
//       <h3>Quản Lý Biến Thể Người Dùng</h3>
//       {/* Nút "Thêm" */}
//       <ConfigProvider>
//         <Space>
//           <Button
//             className="bienthetour-them"
//             type="primary"
//             size="large"
//             icon={<AntDesignOutlined />}
//             onClick={showModalEdit}
//           >
//             Thêm biến thể người dùng
//           </Button>
//         </Space>
//         <ThemBienTheNguoiDung
//           visible={visibleEdit}
//           onCancel={handleCancelEdit}
//         />
//       </ConfigProvider>

//       {/* Tìm kiếm người dùng */}
//       <TimKiem />

//       {/* Bảng người dùng */}
//       <div
//         className="table-container align-items-center mt-5"
//         style={{ marginRight: "-100px" }}
//       >
//         <Table
//           columns={columns(showEditModal, handleDelete)}
//           dataSource={data}
//         />
//       </div>

//       {/* Modal cập nhật tin tức */}
//       {editingUser && (
//         <CapNhatBienTheTour
//           visible={visibleEdit}
//           onCancel={handleCancelEdit}
//           user={editingUser} // Truyền dữ liệu người dùng vào modal
//         />
//       )}
//     </div>
//   );
// };

// export default FormBienTheNguoiDung;
"use client";

import React, { useState } from "react";
import { Table, Tooltip, ConfigProvider, Button, Space, message } from "antd";
import {
  DeleteOutlined,
  AntDesignOutlined,
  HighlightTwoTone,
} from "@ant-design/icons";
import TimKiem from "./TimKiem_BienTheTour";
import CapNhatBienTheTour from "./CapNhatBienTheNguoiDung";
import ThemBienTheNguoiDung from "./ThemBienTheNguoiDung";
import { User } from "./User"; // Điều chỉnh đường dẫn nếu cần

// Định nghĩa kiểu dữ liệu cho người dùng
// interface User {
//   id: string;
//   hoTen: string;
//   email: string;
//   soDienThoai: string;
//   cccd: number;
//   idDatTour: string;
//   moTa: string;
// }

// Cột dữ liệu của bảng
const columns = (
  showEditModal: (user: User) => void,
  handleDelete: (id: string) => void
) => [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text: string) => (
      <a href="#!" onClick={(e) => e.preventDefault()}>
        {text}
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
    render: (hoTen: string) => (
      <Tooltip placement="topLeft" title={hoTen}>
        {hoTen}
      </Tooltip>
    ),
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
    ellipsis: {
      showTitle: false,
    },
    render: (email: string) => (
      <Tooltip placement="topLeft" title={email}>
        {email}
      </Tooltip>
    ),
  },
  {
    title: "Số Điện Thoại",
    dataIndex: "soDienThoai",
    key: "soDienThoai",
    ellipsis: {
      showTitle: false,
    },
    render: (soDienThoai: string) => (
      <Tooltip placement="topLeft" title={soDienThoai}>
        {soDienThoai}
      </Tooltip>
    ),
  },
  {
    title: "Mã Căn Cước Công Dân",
    dataIndex: "cccd",
    key: "cccd",
    ellipsis: {
      showTitle: false,
    },
    render: (cccd: number) => (
      <Tooltip placement="topLeft" title={cccd}>
        {cccd}
      </Tooltip>
    ),
  },
  {
    title: "Mã Đặt Tour",
    dataIndex: "idDatTour",
    key: "idDatTour",
    ellipsis: {
      showTitle: false,
    },
    render: (idDatTour: string) => (
      <Tooltip placement="topLeft" title={idDatTour}>
        {idDatTour}
      </Tooltip>
    ),
  },
  {
    title: "Mô Tả",
    dataIndex: "moTa",
    key: "moTa",
    ellipsis: {
      showTitle: false,
    },
    render: (moTa: string) => (
      <Tooltip placement="topLeft" title={moTa}>
        {moTa}
      </Tooltip>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, record: User) => (
      <Space size="middle">
        {/* Nút Sửa */}
        <Button
          icon={<HighlightTwoTone />}
          onClick={() => showEditModal(record)} // Hiển thị modal chỉnh sửa
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

// Dữ liệu mẫu
const data: User[] = [
  {
    id: "1",
    hoTen: "Nguyễn Văn A",
    email: "01/01/2024",
    soDienThoai: "Du lịch gia đình",
    cccd: 1,
    idDatTour: "true",
    moTa: "abc",
  },
];

// Component chính
const FormBienTheNguoiDung: React.FC = () => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null); // Trạng thái người dùng đang chỉnh sửa

  // Hiển thị modal chỉnh sửa
  const showEditModal = (user: User) => {
    setEditingUser(user); // Đặt người dùng đang được chỉnh sửa
    setVisibleEdit(true); // Mở modal chỉnh sửa
  };

  // Đóng modal chỉnh sửa
  const handleCancelEdit = () => {
    setVisibleEdit(false);
    setEditingUser(null); // Reset trạng thái người dùng sau khi đóng modal
  };

  // Hàm xử lý xóa và hiển thị thông báo
  const handleDelete = (id: string) => {
    const confirmDelete = window.confirm(
      `Bạn có chắc chắn muốn xóa Biến Thể Tour này với ID: ${id}?`
    );
    if (confirmDelete) {
      message.success(`Đã xóa thành công: ${id}`); // Hiển thị thông báo
      // Logic xóa người dùng khỏi dữ liệu nếu cần
    }
  };

  return (
    <div className="container mt-5">
      {/* Nút "Thêm" */}
      <div className="flex justify-center flex-col items-center gap-3">
        <ConfigProvider>
          <h3 className="font-medium text-[26px]">
            Quản Lý Biến Thể Người Dùng
          </h3>
          <Space>
            <Button
              className=" bg-blue-500 text-white"
              type="primary"
              size="large"
              icon={<AntDesignOutlined />}
              onClick={() => setVisibleEdit(true)} // Mở modal thêm người dùng
            >
              Thêm biến thể người dùng
            </Button>
          </Space>
          <ThemBienTheNguoiDung
            visible={visibleEdit}
            onCancel={handleCancelEdit}
            onBack={() => setVisibleEdit(false)}
          />
        </ConfigProvider>
      </div>

      {/* Tìm kiếm người dùng */}
      <TimKiem />

      {/* Bảng người dùng */}
      <div
        className="table-container align-items-center mt-5"
        style={{ marginRight: "-100px" }}
      >
        <Table
          columns={columns(showEditModal, handleDelete)}
          dataSource={data}
        />
      </div>

      {/* Modal cập nhật tin tức */}
      {editingUser && (
        <CapNhatBienTheTour
          visible={visibleEdit}
          onCancel={handleCancelEdit}
          onBack={() => setVisibleEdit(false)}
          user={editingUser} // Truyền dữ liệu người dùng vào modal
        />
      )}
    </div>
  );
};

export default FormBienTheNguoiDung;
