import React, { useState } from "react";
import {
  Select,
  AutoComplete,
  Button,
  Input,
  Row,
  Col,
  message,
  Spin,
} from "antd";
import axios from "axios";
import { debounce } from "lodash"; // Ensure lodash is installed
import { SearchOutlined } from "@ant-design/icons";

const FormTimKiemVaSapXepKhachHang = ({ onUpdate }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  // Handle change in sorting criteria
  const handleSortByChange = (value) => {
    setSortBy(value);
    fetchSortedAndFilteredData(value, sortOrder, searchTerm); // Fetch data when selected
  };

  // Handle change in sorting order and fetch sorted data
  const handleSortOrderChange = (value) => {
    setSortOrder(value);
    fetchSortedData(sortBy, value); // Fetch sorted data when order changes
  };

  // Debounced search function
  const debouncedSearch = debounce((value) => {
    setSearchTerm(value);
    fetchSortedAndFilteredData(sortBy, sortOrder, value); // Fetch data when searching
  }, 300); // Adjust debounce time as needed

  const handleSearch = (value) => {
    debouncedSearch(value);
  };

  // Fetch data based on sorting and filtering
  const fetchSortedAndFilteredData = async (sortBy, sortOrder, searchTerm) => {
    setLoading(true); // Set loading to true
    try {
      const token = localStorage.getItem("token"); // Get token from Local Storage

      // Log the parameters for debugging
      console.log("Fetching data with params:", {
        hoTen: searchTerm,
        sortBy,
        sortOrder,
      });

      const response = await axios.get(
        "http://localhost:8080/api/nguoidung/timkiem", // API for searching
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to header
          },
          params: {
            hoTen: searchTerm, // Search term
            sortBy: sortBy, // Sorting criteria
            sortOrder: sortOrder, // Sorting order
          },
        }
      );

      onUpdate(response.data); // Update data in parent component
    } catch (error) {
      message.error("Không thể tải dữ liệu từ server. " + error.message);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  // Fetch sorted data based on selected criteria
  const fetchSortedData = async (sortBy, sortOrder) => {
    setLoading(true); // Set loading to true
    try {
      const token = localStorage.getItem("token"); // Get token from Local Storage

      // Log the parameters for debugging
      console.log("Fetching sorted data with params:", {
        hoTen: searchTerm,
        sortBy,
        sortOrder,
      });

      const response = await axios.get(
        "http://localhost:8080/api/nguoidung/sapxep", // API for sorting
        {
          headers: {
            Authorization: `Bearer ${token}`, // Add token to header
          },
          params: {
            hoTen: searchTerm, // Use search term if applicable
            sortBy: sortBy, // Sorting criteria
            sortOrder: sortOrder, // Sorting order
          },
        }
      );

      onUpdate(response.data); // Update data in parent component
    } catch (error) {
      message.error("Không thể tải dữ liệu từ server. " + error.message);
    } finally {
      setLoading(false); // Set loading to false regardless of success or error
    }
  };

  return (
    <Row gutter={16} align="middle">
      {/* Select for sorting criteria */}
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

      {/* Select for sorting order */}
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

      {/* AutoComplete for search */}
      <Col>
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
          popupMatchSelectWidth={200}
          onChange={handleSearch}
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

      {/* Loading indicator */}
      {loading && (
        <Col>
          <Spin />
        </Col>
      )}
    </Row>
  );
};

export default FormTimKiemVaSapXepKhachHang;
