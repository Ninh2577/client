// radio.tsx
"use client";
import React, { useState } from "react";
import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";

interface RadioGroupProps {
  onGenderChange: (value: number) => void; // Nhận hàm callback từ component cha
}
const RadioGroup: React.FC<RadioGroupProps> = ({ onGenderChange }) => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (e: RadioChangeEvent) => {
    const newValue = e.target.value;
    setSelectedValue(newValue); // Cập nhật giá trị đã chọn
    onGenderChange(newValue); // Gọi hàm callback với giá trị mới
  };

  return (
    <Radio.Group
      onChange={handleChange}
      value={selectedValue}
      className="mt-1.5 ml-[80px]"
    >
      <Radio value={0}>Nữ</Radio>
      <Radio style={{ marginLeft: "-130px" }} value={1}>
        Nam
      </Radio>
      {/* ... */}
    </Radio.Group>
  );
};

export default RadioGroup;
