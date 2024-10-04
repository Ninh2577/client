// radio.tsx
'use client'
import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Radio } from 'antd';

const RadioGroup = () => {
  const [selectedValue, setSelectedValue] = useState(1);

  const handleChange = (e: RadioChangeEvent) => {
    setSelectedValue(e.target.value);
    // ...
  };

  return (
    <Radio.Group onChange={handleChange} value={selectedValue} className="mt-1.5 ml-[76px]">
      <Radio value={1} >Nữ</Radio>
      <Radio style={{marginLeft: '-130px'}} value={2} >Nam</Radio>
      {/* ... */}
    </Radio.Group>
  );
};

export default RadioGroup;