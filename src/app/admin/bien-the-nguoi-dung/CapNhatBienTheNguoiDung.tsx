// import React, { useState } from "react";
// import { Button, Checkbox, Form, Input, Modal, message } from "antd";
// import "bootstrap/dist/css/bootstrap.min.css";

// const { TextArea } = Input;

// const FormThemBienTheTour = ({ visible, onCancel, onBack }) => {
//   const [componentDisabled, setComponentDisabled] = useState(true);
//   const [form] = Form.useForm();

//   const onFinish = () => {
//     message.success("Submit success!");
//   };

//   const onFinishFailed = () => {
//     message.error("Submit failed!");
//   };

//   return (
//     <div className="container-fluid mt-5">
//       <Modal
//         title="Cập Nhật Biến Thể Người Dùng"
//         visible={visible}
//         onCancel={onCancel}
//         footer={null}
//         width={900}
//       >
//         <Checkbox
//           className="mb-3"
//           checked={componentDisabled}
//           onChange={(e) => setComponentDisabled(e.target.checked)}
//         >
//           Vô hiệu hóa biểu mẫu
//         </Checkbox>
//         <Form layout="vertical" disabled={componentDisabled}>
//           <div className="row">
//             {/* Thay thế phần Video bằng URL */}
//             <div className="col-lg-6">
//               <Form
//                 form={form}
//                 layout="vertical"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <Form.Item
//                   name="hoTen"
//                   label="Họ & Tên"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Họ & Tên không bỏ trống!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="Họ Tên "
//                     id="small-input"
//                     className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </Form.Item>
//               </Form>
//             </div>
//             <div className="col-lg-6">
//               <Form
//                 form={form}
//                 layout="vertical"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <Form.Item
//                   name="email"
//                   label="Email"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Email không bỏ trống!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="Email"
//                     id="small-input"
//                     className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </Form.Item>
//               </Form>
//             </div>
//             <div className="col-lg-6">
//               <Form
//                 form={form}
//                 layout="vertical"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <Form.Item
//                   name="soDienThoai"
//                   label="Số Điện Thoại"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Số điện thoại không bỏ trống!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="Số điện thoại "
//                     id="small-input"
//                     className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </Form.Item>
//               </Form>
//             </div>
//             <div className="col-lg-6">
//               <Form
//                 form={form}
//                 layout="vertical"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <Form.Item
//                   name="cccd"
//                   label="Mã Căn Cước Công Dân"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Căn cước công dân không bỏ trống!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="Căn cước công dân"
//                     id="small-input"
//                     className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </Form.Item>
//               </Form>
//             </div>
//             <div className="col-lg-6">
//               <Form
//                 form={form}
//                 layout="vertical"
//                 onFinish={onFinish}
//                 onFinishFailed={onFinishFailed}
//                 autoComplete="off"
//               >
//                 <Form.Item
//                   name="maTour"
//                   label="Mã Tour (còn phát triển 'xét cứng')"
//                   rules={[
//                     {
//                       required: true,
//                       message: "Mã tour không bỏ trống!",
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="Mã Tour "
//                     id="small-input"
//                     className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </Form.Item>
//               </Form>
//             </div>
//             <div className="col-lg-6">
//               <Form.Item label="Mô tả" name="moTa">
//                 <TextArea rows={3} placeholder="Mô tả" />
//               </Form.Item>
//             </div>
//           </div>
//           <div className="d-flex justify-content-between mt-3">
//             <Button className="btn btn-secondary" onClick={onBack}>
//               Quay Lại
//             </Button>
//             <Button
//               className="btn btn-primary"
//               onClick={onCancel}
//               htmlType="submit"
//             >
//               Xác Nhận
//             </Button>
//           </div>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default FormThemBienTheTour;
"use client";

import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal, message } from "antd";
// import "bootstrap/dist/css/bootstrap.min.css";

const { TextArea } = Input;

interface FormThemBienTheTourProps {
  visible: boolean;
  onCancel: () => void;
  onBack: () => void;
  user: User; // Thêm thuộc tính user
}

const FormThemBienTheTour: React.FC<FormThemBienTheTourProps> = ({
  visible,
  onCancel,
  onBack,
  user,
}) => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [form] = Form.useForm();

  const onFinish = () => {
    message.success("Submit success!");
  };

  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  return (
    <div className="container-fluid mt-5">
      <Modal
        title="Cập nhật Biến Thể Người Dùng"
        visible={visible}
        onCancel={onCancel}
        footer={null}
        width={900}
      >
        <Checkbox
          className="mb-3"
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
        >
          Vô hiệu hóa biểu mẫu
        </Checkbox>
        <Form
          layout="vertical"
          disabled={componentDisabled}
          form={form}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div className="flex flex-row gap-4">
            {/* Thay thế phần Video bằng URL */}
            <div className="flex-1">
              <div className="col-lg-6">
                <Form.Item
                  name="hoTen"
                  label="Họ & Tên"
                  rules={[
                    {
                      required: true,
                      message: "Họ & Tên không bỏ trống!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Họ Tên "
                    id="small-input"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </Form.Item>
              </div>

              <div className="col-lg-6">
                <Form.Item
                  name="soDienThoai"
                  label="Số Điện Thoại"
                  rules={[
                    {
                      required: true,
                      message: "Số điện thoại không bỏ trống!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Số điện thoại "
                    id="small-input"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </Form.Item>
              </div>
              <div className="col-lg-6">
                <Form.Item
                  name="maTour"
                  label="Mã Tour (còn phát triển 'xét cứng')"
                  rules={[
                    {
                      required: true,
                      message: "Mã tour không bỏ trống!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Mã Tour "
                    id="small-input"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </Form.Item>
              </div>
            </div>
            <div className="flex-1">
              <div className="col-lg-6">
                <Form.Item
                  name="email"
                  label="Email"
                  rules={[
                    {
                      required: true,
                      message: "Email không bỏ trống!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Email"
                    id="small-input"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </Form.Item>
              </div>
              <div className="col-lg-6">
                <Form.Item
                  name="cccd"
                  label="Mã Căn Cước Công Dân"
                  rules={[
                    {
                      required: true,
                      message: "Căn cước công dân không bỏ trống!",
                    },
                  ]}
                >
                  <Input
                    placeholder="Căn cước công dân"
                    id="small-input"
                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </Form.Item>
              </div>

              <div className="col-lg-6">
                <Form.Item label="Mô tả" name="moTa">
                  <TextArea rows={3} placeholder="Mô tả" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="flex justify-between mt-3 text-white">
            <Button className="bg-gray-400  text-white" onClick={onBack}>
              Quay Lại
            </Button>
            <Button
              className="bg-blue-500 text-white"
              onClick={onCancel}
              htmlType="submit"
            >
              Xác Nhận
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default FormThemBienTheTour;
