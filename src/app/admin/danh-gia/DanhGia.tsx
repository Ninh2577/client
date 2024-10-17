// import React, { useState } from "react";
// import { Table, Tooltip, Button, ConfigProvider, Space, message } from "antd";
// import {
//   AntDesignOutlined,
//   DeleteOutlined,
//   HighlightTwoTone,
//   EyeTwoTone,
// } from "@ant-design/icons";
// import TimKiem from "./TimKiem_BienTheTour"; // Kiểm tra tệp này
// import ThemBienTheTour from "./ThemBienTheTour"; // Kiểm tra
// import CapNhatBienTheTour from "./CapNhatBienTheTour"; // Kiểm tra

// // Cột dữ liệu của bảng
// const columns = (showEditModal, handleDelete, handleChiTiet) => [
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
//     title: "Tên Người Dùng",
//     dataIndex: "tenNguoiDung",
//     key: "tenNguoiDung",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (tenNguoiDung) => (
//       <Tooltip placement="topLeft" title={tenNguoiDung}>
//         {tenNguoiDung}
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
//     title: "Tên Tour",
//     dataIndex: "tenTour",
//     key: "tenTour",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (tenTour) => (
//       <Tooltip placement="topLeft" title={tenTour}>
//         {tenTour}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "Đánh Giá",
//     dataIndex: "danhGia",
//     key: "danhGia",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (danhGia) => (
//       <Tooltip placement="topLeft" title={danhGia}>
//         {danhGia}
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
//     title: "Ngày",
//     dataIndex: "ngay",
//     key: "ngay",
//     ellipsis: {
//       showTitle: false,
//     },
//     render: (ngay) => (
//       <Tooltip placement="topLeft" title={ngay}>
//         {ngay}
//       </Tooltip>
//     ),
//   },
//   {
//     title: "",
//     key: "action",
//     render: (_, record) => (
//       <Space size="middle">
//         {/* Nút xem chi tiết */}
//         <Button
//           icon={<EyeTwoTone />}
//           onClick={() => handleChiTiet(record)} // Hiển thị modal xem chi tiết
//         ></Button>

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
//     tenNguoiDung: "Nguyễn Văn A",
//     soDienThoai: "0987654321",
//     email: "nguyenvana@gmail.com",
//     tenTour: "Du lịch gia đình",
//     danhGia: "5 sao",
//     moTa: "cần thơ có ch�� n��i",
//     ngay: "01/01/2024",
//   },
// ];

// // Component chính
// const FormDanhGia = () => {
//   const [visibleEdit, setVisibleEdit] = useState(false);
//   const [editingUser, setEditingUser] = useState(null); // Trạng thái người dùng đang chỉnh sửa

//   const showModalEdit = () => {
//     setVisibleEdit(true);
//   };

//   const handleCancelEdit = () => {
//     setVisibleEdit(false);
//     setEditingUser(null); // Reset trạng thái người dùng sau khi đóng modal
//   };

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
//       <h3>Quản Lý Đánh Giá</h3>

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
//             Thêm biến thể Tour
//           </Button>
//         </Space>
//         <ThemBienTheTour visible={visibleEdit} onCancel={handleCancelEdit} />
//       </ConfigProvider>

//       {/* Tìm kiếm người dùng */}
//       <TimKiem />

//       {/* Bảng người dùng */}
//       <div
//         className="table-container align-items-center"
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

// export default FormDanhGia;
"use client";
import React, { useState } from "react";
import { Table, Tooltip, Button, ConfigProvider, Space, message } from "antd";
import {
  AntDesignOutlined,
  DeleteOutlined,
  HighlightTwoTone,
  EyeTwoTone,
} from "@ant-design/icons";
import TimKiem from "./TimKiem_BienTheTour"; // Kiểm tra tệp này
import ThemBienTheTour from "./ThemBienTheTour"; // Kiểm tra
import CapNhatBienTheTour from "./CapNhatBienTheTour"; // Kiểm tra

// Định nghĩa kiểu cho dữ liệu người dùng
interface User {
  id: string;
  tenNguoiDung: string;
  soDienThoai: string;
  email: string;
  tenTour: string;
  danhGia: string;
  moTa: string;
  ngay: string;
}

// Cột dữ liệu của bảng
const columns = (
  showEditModal: (user: User) => void,
  handleDelete: (id: string) => void,
  handleChiTiet: (record: User) => void
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
    title: "Tên Người Dùng",
    dataIndex: "tenNguoiDung",
    key: "tenNguoiDung",
    ellipsis: {
      showTitle: false,
    },
    render: (tenNguoiDung: string) => (
      <Tooltip placement="topLeft" title={tenNguoiDung}>
        {tenNguoiDung}
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
    title: "Tên Tour",
    dataIndex: "tenTour",
    key: "tenTour",
    ellipsis: {
      showTitle: false,
    },
    render: (tenTour: string) => (
      <Tooltip placement="topLeft" title={tenTour}>
        {tenTour}
      </Tooltip>
    ),
  },
  {
    title: "Đánh Giá",
    dataIndex: "danhGia",
    key: "danhGia",
    ellipsis: {
      showTitle: false,
    },
    render: (danhGia: string) => (
      <Tooltip placement="topLeft" title={danhGia}>
        {danhGia}
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
    title: "Ngày",
    dataIndex: "ngay",
    key: "ngay",
    ellipsis: {
      showTitle: false,
    },
    render: (ngay: string) => (
      <Tooltip placement="topLeft" title={ngay}>
        {ngay}
      </Tooltip>
    ),
  },
  {
    title: "",
    key: "action",
    render: (_, record: User) => (
      <Space size="middle">
        {/* Nút xem chi tiết */}
        <Button
          icon={<EyeTwoTone />}
          onClick={() => handleChiTiet(record)} // Hiển thị modal xem chi tiết
        ></Button>

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
    tenNguoiDung: "Nguyễn Văn A",
    soDienThoai: "0987654321",
    email: "nguyenvana@gmail.com",
    tenTour: "Du lịch gia đình",
    danhGia: "5 sao",
    moTa: "cần thơ có ch�� n��i",
    ngay: "01/01/2024",
  },
];

// Component chính
const FormDanhGia: React.FC = () => {
  const [visibleEdit, setVisibleEdit] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null); // Trạng thái người dùng đang chỉnh sửa

  const showModalEdit = () => {
    setVisibleEdit(true);
  };

  const handleCancelEdit = () => {
    setVisibleEdit(false);
    setEditingUser(null); // Reset trạng thái người dùng sau khi đóng modal
  };

  const showEditModal = (user: User) => {
    setEditingUser(user); // Đặt người dùng đang được chỉnh sửa
    setVisibleEdit(true); // Mở modal chỉnh sửa
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

  const handleChiTiet = (record: User) => {
    // Logic xem chi tiết người dùng
    message.info(`Xem chi tiết người dùng: ${record.tenNguoiDung}`);
  };

  return (
    <div className="container">
      <h3>Quản Lý Đánh Giá</h3>

      {/* Nút "Thêm" */}
      <ConfigProvider>
        <Space>
          <Button
            className="bienthetour-them"
            type="primary"
            size="large"
            icon={<AntDesignOutlined />}
            onClick={showModalEdit}
          >
            Thêm biến thể Tour
          </Button>
        </Space>
        <ThemBienTheTour visible={visibleEdit} onCancel={handleCancelEdit} />
      </ConfigProvider>

      {/* Tìm kiếm người dùng */}
      <TimKiem />

      {/* Bảng người dùng */}
      <div
        className="table-container align-items-center"
        style={{ marginRight: "-100px" }}
      >
        <Table
          columns={columns(showEditModal, handleDelete, handleChiTiet)}
          dataSource={data}
        />
      </div>

      {/* Modal cập nhật tin tức */}
      {editingUser && (
        <CapNhatBienTheTour
          visible={visibleEdit}
          onCancel={handleCancelEdit}
          user={editingUser} // Truyền dữ liệu người dùng vào modal
        />
      )}
    </div>
  );
};

export default FormDanhGia;
