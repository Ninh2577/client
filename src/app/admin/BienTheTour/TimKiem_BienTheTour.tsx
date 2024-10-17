// import React from "react";
// import { Select, AutoComplete, Button, Input, Row, Col } from "antd";
// import { SearchOutlined } from "@ant-design/icons";

// // Hàm xử lý khi thay đổi giá trị trong Select
// const onChange = (value) => {
//   console.log(`selected ${value}`);
// };

// // Hàm xử lý khi tìm kiếm trong Select
// const onSearch = (value) => {
//   console.log("search:", value);
// };

// const App = () => (
//   <div>
//     <Row gutter={16} align="middle">
//       {/* Select đầu tiên */}
//       <Col>
//         <Select
//           showSearch
//           placeholder="Sắp xếp theo:"
//           optionFilterProp="label"
//           onChange={onChange}
//           onSearch={onSearch}
//           style={{ width: 250 }}
//           options={[
//             {
//               value: "1",
//               label: "Tour",
//             },
//             {
//               value: "2",
//               label: "Loại Tour",
//             },
//             {
//               value: "3",
//               label: "Mô tả",
//             },
//           ]}
//         />
//       </Col>

//       {/* Select thứ hai */}
//       <Col>
//         <Select
//           showSearch
//           placeholder="Thứ tự:"
//           optionFilterProp="label"
//           onChange={onChange}
//           onSearch={onSearch}
//           style={{ width: 250 }}
//           options={[
//             {
//               value: "asc",
//               label: "Tăng dần",
//             },
//             {
//               value: "desc",
//               label: "Giảm dần",
//             },
//           ]}
//         />
//       </Col>

//       {/* AutoComplete (tìm kiếm) */}
//       <Col>
//         <AutoComplete
//           popupClassName="certain-category-search-dropdown"
//           popupMatchSelectWidth={200}
//           style={{
//             width: 250,
//           }}
//           size="large"
//         >
//           <Input
//             size="large"
//             placeholder="Nhập từ khóa tìm kiếm"
//             id="small-input"
//             className="mt-1 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//           />
//         </AutoComplete>
//         <Button icon={<SearchOutlined />}>Search</Button>
//       </Col>
//     </Row>
//   </div>
// );

// export default App;
"use client";
import React from "react";
import { Select, AutoComplete, Button, Input, Row, Col } from "antd";
import { SearchOutlined } from "@ant-design/icons";

// Hàm xử lý khi thay đổi giá trị trong Select
const onChange = (value: string) => {
  console.log(`selected ${value}`);
};

// Hàm xử lý khi tìm kiếm trong Select
const onSearch = (value: string) => {
  console.log("search:", value);
};

const App: React.FC = () => (
  <div>
    <Row gutter={16} align="middle">
      {/* Select đầu tiên */}
      <Col>
        <Select
          showSearch
          placeholder="Sắp xếp theo:"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{ width: 250 }}
          options={[
            {
              value: "1",
              label: "Tour",
            },
            {
              value: "2",
              label: "Loại Tour",
            },
            {
              value: "3",
              label: "Mô tả",
            },
          ]}
        />
      </Col>

      {/* Select thứ hai */}
      <Col>
        <Select
          showSearch
          placeholder="Thứ tự:"
          optionFilterProp="label"
          onChange={onChange}
          onSearch={onSearch}
          style={{ width: 250 }}
          options={[
            {
              value: "asc",
              label: "Tăng dần",
            },
            {
              value: "desc",
              label: "Giảm dần",
            },
          ]}
        />
      </Col>

      {/* AutoComplete (tìm kiếm) */}
      <Col>
        <AutoComplete
          popupClassName="certain-category-search-dropdown"
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
    </Row>
  </div>
);

export default App;
