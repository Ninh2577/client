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
    <Radio.Group onChange={handleChange} value={selectedValue} className="mt-1.5">
      <Radio value={1}>Admin</Radio>
      <Radio value={2}>User</Radio>
      {/* ... */}
    </Radio.Group>
  );
};

export default RadioGroup;