import React, { useState } from "react";
import {
  Select,
  Input,
  AutoComplete,
  Button,
  Row,
  Col,
  message,
  Spin,
} from "antd";
import axios from "axios";
import { debounce } from "lodash"; // Đảm bảo đã cài đặt lodash
import { SearchOutlined } from "@ant-design/icons";

const FormTimKiemVaSapXepNguoiDung = ({ onUpdate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [loading, setLoading] = useState(false); // Trạng thái tải

  // Xử lý thay đổi sắp xếp theo
  const handleSortByChange = (value) => {
    setSortBy(value);
    fetchSortedAndFilteredData(value, sortOrder, searchTerm); // Lấy dữ liệu khi chọn
  };

  // Xử lý thay đổi thứ tự sắp xếp
  const handleSortOrderChange = (value) => {
    setSortOrder(value);
    fetchSortedAndFilteredData(sortBy, value, searchTerm);
  };
  // Hàm tìm kiếm đã được debounce
  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
    fetchSortedAndFilteredData(sortBy, sortOrder, value);
  }, 300); // Điều chỉnh thời gian debounce nếu cần
  const handleSearch = (value) => {
    debouncedSearch(value);
  };

  // Hàm để lấy dữ liệu đã sắp xếp và lọc
  const fetchSortedAndFilteredData = async (sortBy, sortOrder, searchTerm) => {
    setLoading(true); // Đặt trạng thái tải thành true
    try {
      const token = localStorage.getItem("token"); // Lấy token từ Local Storage

      const response = await axios.get(
        "http://localhost:8080/api/nguoidung?vaiTroId=2",
        {
          headers: {
            Authorization: `Bearer ${token}`, // Thêm token vào header
          },
          params: {
            search: searchTerm,
            sortBy: sortBy, // Ví dụ: "hoTen", "email", "soDienThoai"
            sortOrder: sortOrder, // "asc" hoặc "desc"
          },
        }
      );
      onUpdate(response.data); // Cập nhật dữ liệu trong component cha (Khách Hàng form)
    } catch (error) {
      message.error("Không thể tải dữ liệu từ server. " + error.message);
    } finally {
      setLoading(false); // Đặt trạng thái tải thành false bất kể thành công hay lỗi
    }
  };

  return (
    <Row gutter={16} align="middle">
      {/* Select để sắp xếp theo */}
      <Col>
        <Select
          showSearch
          placeholder="Sắp xếp theo:"
          onChange={handleSortByChange}
          style={{ width: 250 }}
          options={[
            { value: "soDienThoai", label: "Số Điện Thoại" },
            { value: "hoTen", label: "Họ & Tên" },
            { value: "email", label: "Email" },
            { value: "tuoi", label: "Tuổi" },
          ]}
        />
      </Col>

      {/* Select để chọn thứ tự sắp xếp */}
      <Col>
        <Select
          showSearch
          placeholder="Thứ tự:"
          onChange={handleSortOrderChange}
          style={{ width: 250 }}
          options={[
            { value: "asc", label: "Tăng dần" },
            { value: "desc", label: "Giảm dần" },
          ]}
        />
      </Col>

      {/* AutoComplete để tìm kiếm */}
      <Col>
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          onChange={handleSearch}
          popupMatchSelectWidth={200}
          style={{
            width: 250,
          }}
          size="large"
        >
          <Input
            size="large"
            placeholder="Nhập từ khóa tìm kiếm"
            id="small-input"
            className="mt-1 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </AutoComplete>
        <Button icon={<SearchOutlined />}>Search</Button>
      </Col>

      {/* Chỉ báo tải */}
      {loading && (
        <Col>
          <Spin />
        </Col>
      )}
    </Row>
  );
};

export default FormTimKiemVaSapXepNguoiDung; // Xuất thành phần
