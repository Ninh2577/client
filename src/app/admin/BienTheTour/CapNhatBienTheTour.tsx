// import React, { useState } from "react";
// import {
//   Button,
//   Checkbox,
//   Form,
//   Input,
//   Modal,
//   Upload,
//   Image,
//   Select,
//   message,
// } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
// import "bootstrap/dist/css/bootstrap.min.css";

// const { TextArea } = Input;

// const getBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// };

// const FormCapNhatBienTheTour = ({ visible, onCancel, onBack }) => {
//   const [componentDisabled, setComponentDisabled] = useState(true);
//   const [fileList, setFileList] = useState([]);
//   const [previewImage, setPreviewImage] = useState("");
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [form] = Form.useForm();

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj);
//     }
//     setPreviewImage(file.url || file.preview);
//     setPreviewOpen(true);
//   };

//   const handleChange = ({ fileList }) => setFileList(fileList);

//   const onFinish = () => {
//     message.success("Submit success!");
//   };

//   const onFinishFailed = () => {
//     message.error("Submit failed!");
//   };
//   const uploadButton = (
//     <div>
//       <PlusOutlined />
//       <div style={{ marginTop: 8 }}>Tải lên</div>
//     </div>
//   );

//   return (
//     <div className="container-fluid mt-5">
//       <Modal
//         title="Cập nhật Biến Thể Tour"
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
//             <div className="col-lg-6">
//               <Form.Item
//                 label="Tên Tour"
//                 name="tenTour"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Tên tour không bỏ trống!",
//                   },
//                 ]}
//               >
//                 <Select>
//                   <Select.Option value="1">Xô đảo bình hưng</Select.Option>
//                   <Select.Option value="2">Tour côn đảo</Select.Option>
//                   <Select.Option value="3">Đảo phú quý</Select.Option>
//                   <Select.Option value="4">Tour Phú Quốc</Select.Option>
//                 </Select>
//               </Form.Item>
//             </div>
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
//                   name="url"
//                   label="URL - Video"
//                   rules={[
//                     {
//                       required: true,
//                     },
//                     {
//                       type: "url",
//                       warningOnly: true,
//                     },
//                     {
//                       type: "string",
//                       min: 6,
//                     },
//                   ]}
//                 >
//                   <Input
//                     placeholder="URL - Video ['https://...']"
//                     id="small-input"
//                     className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                   />
//                 </Form.Item>
//               </Form>
//             </div>
//             <div className="col-lg-6">
//               <Form.Item
//                 label="Ảnh"
//                 name="anh"
//                 rules={[
//                   {
//                     required: true,
//                     message: "Ảnh không được để trống!",
//                   },
//                 ]}
//               >
//                 <Upload
//                   listType="picture-circle"
//                   fileList={fileList}
//                   onPreview={handlePreview}
//                   onChange={handleChange}
//                 >
//                   {fileList.length >= 8 ? null : uploadButton}
//                 </Upload>
//                 {previewImage && (
//                   <Image
//                     preview={{
//                       visible: previewOpen,
//                       onVisibleChange: (visible) => setPreviewOpen(visible),
//                     }}
//                     src={previewImage}
//                     className="img-fluid"
//                   />
//                 )}
//               </Form.Item>
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

// export default FormCapNhatBienTheTour;
"use client";
import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Upload,
  Image,
  Select,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Tour } from "./Tour"; // Điều chỉnh đường dẫn nếu cần
// import "bootstrap/dist/css/bootstrap.min.css";

// Định nghĩa kiểu props cho component
interface FormCapNhatBienTheTourProps {
  visible: boolean;
  onCancel: () => void;
  onBack: () => void;
  user: Tour;
}

const { TextArea } = Input;

// Hàm chuyển đổi file thành base64
const getBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = (error) => reject(error);
  });
};

const FormCapNhatBienTheTour: React.FC<FormCapNhatBienTheTourProps> = ({
  visible,
  onCancel,
  onBack,
  user,
}) => {
  const [componentDisabled, setComponentDisabled] = useState<boolean>(true);
  const [fileList, setFileList] = useState<any[]>([]);
  const [previewImage, setPreviewImage] = useState<string>("");
  const [previewOpen, setPreviewOpen] = useState<boolean>(false);
  const [form] = Form.useForm();

  const handlePreview = async (file: any) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList }: { fileList: any[] }) =>
    setFileList(fileList);

  const onFinish = () => {
    message.success("Gửi thành công!");
  };

  const onFinishFailed = () => {
    message.error("Gửi thất bại!");
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Tải lên</div>
    </div>
  );

  return (
    <div className="container-fluid mt-5">
      <Modal
        title="Cập nhật Biến Thể Tour"
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
        >
          <div className="flex flex-row gap-4">
            <div className="flex-1">
              <div className="col-lg-6">
                <Form.Item
                  label="Tên Tour"
                  name="tenTour"
                  rules={[
                    {
                      required: true,
                      message: "Tên tour không bỏ trống!",
                    },
                  ]}
                >
                  <Select>
                    <Select.Option value="1">Xô đảo bình hưng</Select.Option>
                    <Select.Option value="2">Tour côn đảo</Select.Option>
                    <Select.Option value="3">Đảo phú quý</Select.Option>
                    <Select.Option value="4">Tour Phú Quốc</Select.Option>
                  </Select>
                </Form.Item>
              </div>
              <div className="col-lg-6">
                <Form.Item
                  label="Ảnh"
                  name="anh"
                  rules={[
                    {
                      required: true,
                      message: "Ảnh không được để trống!",
                    },
                  ]}
                >
                  <Upload
                    listType="picture-circle"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                  >
                    {fileList.length >= 8 ? null : uploadButton}
                  </Upload>
                  {previewImage && (
                    <Image
                      preview={{
                        visible: previewOpen,
                        onVisibleChange: (visible) => setPreviewOpen(visible),
                      }}
                      src={previewImage}
                      className="img-fluid"
                    />
                  )}
                </Form.Item>
              </div>
            </div>
            <div className="flex-1">
              {/* Thay thế phần Video bằng URL */}
              <div className="col-lg-6">
                <Form.Item
                  name="url"
                  label="URL - Video"
                  rules={[
                    {
                      required: true,
                      message: "Vui lòng nhập URL!",
                    },
                    {
                      type: "url",
                      warningOnly: true,
                    },
                    {
                      type: "string",
                      min: 6,
                    },
                  ]}
                >
                  <Input
                    placeholder="URL - Video ['https://...']"
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
            <Button className="bg-blue-500 text-white" htmlType="submit">
              Xác Nhận
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default FormCapNhatBienTheTour;
