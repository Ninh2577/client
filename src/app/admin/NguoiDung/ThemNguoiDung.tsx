import React, { useState } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
  Radio,
  Upload,
  message,
  Image,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { UploadOutlined } from "@ant-design/icons"; // Import UploadOutlined
import axios from "axios"; // Import axios
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage"; // Fix import statement for Firebase

const { TextArea } = Input;

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtXg4mkxx1gic_VlvyxWcEloGZ6VFyymg",
  authDomain: "travel-e7f79.firebaseapp.com",
  projectId: "travel-e7f79",
  storageBucket: "travel-e7f79.appspot.com",
  messagingSenderId: "52519186637",
  appId: "1:52519186637:web:d0bb8aa8a499a7179b3984",
  measurementId: "G-HLNSGQZCPH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // Initialize storage

// Function to convert file to base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const FormThemNguoiDung = ({ visible, onCancel, onBack }) => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileCCCDtruoc, setFileCCCDtruoc] = useState([]);
  const [fileCCCDsau, setFileCCCDsau] = useState([]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
  const handleCCCDtruocChange = ({ fileList: newFileList }) =>
    setFileCCCDtruoc(newFileList);
  const handleCCCDsauChange = ({ fileList: newFileList }) =>
    setFileCCCDsau(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Tải lên</div>
    </div>
  );

  const uploadImageToFirebase = async (base64Image) => {
    try {
      const imageRef = ref(storage, `images/${Date.now()}.png`);
      await uploadString(imageRef, base64Image, "data_url");
      return await getDownloadURL(imageRef);
    } catch (error) {
      console.error("Lỗi khi upload hình ảnh lên Firebase:", error);
      throw error; // Ném lại lỗi để xử lý tiếp
    }
  };

  const onFinish = async (values) => {
    try {
      const hinhAnhBase64 =
        fileList.length > 0 ? await getBase64(fileList[0].originFileObj) : "";
      const anhCCCDtruocBase64 =
        fileCCCDtruoc.length > 0
          ? await getBase64(fileCCCDtruoc[0].originFileObj)
          : "";
      const anhCCCDsauBase64 =
        fileCCCDsau.length > 0
          ? await getBase64(fileCCCDsau[0].originFileObj)
          : "";

      // Validate that CCCD images are uploaded
      if (!anhCCCDtruocBase64 || !anhCCCDsauBase64) {
        message.error("Cần tải lên cả ảnh CCCD trước và sau!");
        return; // Stop execution if validations fail
      }

      const hinhAnhUrl = await uploadImageToFirebase(hinhAnhBase64);
      const anhCCCDtruocUrl = await uploadImageToFirebase(anhCCCDtruocBase64);
      const anhCCCDsauUrl = await uploadImageToFirebase(anhCCCDsauBase64);

      const formData = {
        hoTen: values.hoTen,
        email: values.email,
        soDienThoai: values.soDienThoai,
        diaChi: values.diaChi,
        matKhau: values.matKhau,
        hinhAnh: hinhAnhUrl,
        gioiTinh: values.gioiTinh === "Nam" ? true : false,
        namSinh: values.namSinh
          ? values.namSinh.format("YYYY-MM-DDTHH:mm:ss")
          : null,
        cccd: values.cccd,
        anhCCCDtruoc: anhCCCDtruocUrl,
        anhCCCDsau: anhCCCDsauUrl,
        vaiTro: {
          id: values.vaiTro === "Admin" ? 1 : 2,
          vaiTro: values.vaiTro,
          moTa: null,
        },
      };

      const response = await axios.post(
        "http://localhost:8080/api/nguoidung/add",
        formData
      );
      console.log("Người dùng đã được thêm:", response.data);
      message.success("Thêm người dùng thành công"); // Hiển thị thông báo thành công

      onCancel(); // Đóng modal sau khi gửi thành công
    } catch (error) {
      console.error("Lỗi khi thêm người dùng:", error);
      message.error("Đã xảy ra lỗi khi thêm người dùng. Vui lòng thử lại."); // Notify user of error
    }
  };

  return (
    <div className="container-fluid mt-5">
      <Modal
        title="Thêm Người Dùng"
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
          onFinish={onFinish}
        >
          <div className="row">
            {/* User form fields */}
            <div className="col-lg-6">
              <Form.Item
                label="Họ & Tên"
                name="hoTen"
                rules={[
                  { required: true, message: "Họ & Tên không được để trống!" },
                ]}
              >
                <Input
                  placeholder="Họ & Tên"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="small-input"
                />
              </Form.Item>
            </div>

            <div className="col-lg-6">
              <Form.Item
                label="Số Điện Thoại"
                name="soDienThoai"
                rules={[
                  { required: true, message: "Số điện thoại không bỏ trống!" },
                  {
                    pattern: /^[0-9]+$/,
                    message: "Số điện thoại chỉ chứa chữ số!",
                  },
                ]}
              >
                <Input
                  placeholder="Số điện thoại"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="small-input"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Email không bỏ trống!" },
                  { type: "email", message: "Email không hợp lệ!" },
                ]}
              >
                <Input
                  placeholder="Email"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="small-input"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Mật Khẩu"
                name="matKhau"
                rules={[
                  { required: true, message: "Mật khẩu không bỏ trống!" },
                  { min: 6, message: "Mật khẩu phải ít nhất 6 ký tự!" },
                ]}
              >
                <Input.Password placeholder="Mật khẩu" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Mã Căn Cước Công Dân"
                name="cccd"
                rules={[
                  {
                    required: true,
                    message: "Mã căn cước công dân không bỏ trống!",
                  },
                  { min: 12, max: 12, message: "CCCD phải có 12 chữ số!" },
                  { pattern: /^[0-9]+$/, message: "CCCD chỉ chứa chữ số!" },
                ]}
              >
                <Input
                  placeholder="Mã căn cước công dân"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="small-input"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Ngày Sinh"
                name="namSinh"
                rules={[
                  { required: true, message: "Ngày sinh không bỏ trống!" },
                ]}
              >
                <DatePicker className="w-100" format="DD/MM/YYYY" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Giới Tính"
                name="gioiTinh"
                rules={[
                  { required: true, message: "Vui lòng chọn giới tính!" },
                ]}
              >
                <Radio.Group>
                  <Radio value="Nam">Nam</Radio>
                  <Radio value="Nữ">Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Vai Trò"
                name="vaiTro"
                initialValue="Admin" // Set default value to "Admin"
              >
                <Input
                  value="Admin"
                  disabled
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="small-input"
                />
                {/* Disable input to prevent changes */}
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item label="Hình Ảnh">
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onChange={handleChange}
                  onPreview={handlePreview}
                  showUploadList={true}
                >
                  {fileList.length < 1 && uploadButton}
                </Upload>
              </Form.Item>
              <Image
                preview={false}
                width={100}
                src={previewImage}
                style={{ display: previewOpen ? "block" : "none" }}
              />
            </div>
            <div className="col-lg-6">
              <Form.Item label="Ảnh CCCD Trước">
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // Your upload URL
                  listType="picture"
                  maxCount={1}
                  onChange={handleCCCDtruocChange} // Update the state on change
                >
                  <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                </Upload>
              </Form.Item>
              <Image
                preview={false}
                width={100}
                src={previewImage}
                style={{ display: previewOpen ? "block" : "none" }}
              />
              <Form.Item label="Ảnh CCCD Sau">
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // Your upload URL
                  listType="picture"
                  maxCount={1}
                  onChange={handleCCCDsauChange} // Update the state on change
                >
                  <Button icon={<UploadOutlined />}>Upload (Max: 1)</Button>
                </Upload>
              </Form.Item>
              <Image
                preview={false}
                width={100}
                src={previewImage}
                style={{ display: previewOpen ? "block" : "none" }}
              />
            </div>

            {/* Địa chỉ */}
            <div className="col-lg-12">
              <Form.Item
                label="Địa chỉ"
                name="diaChi"
                rules={[{ required: true, message: "Địa chỉ không bỏ trống!" }]}
              >
                <TextArea rows={3} placeholder="Địa chỉ" />
              </Form.Item>
            </div>
          </div>
          <Form.Item className="text-right">
            <Button
              type="primary"
              onClick={onBack}
              // className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Quay Lại
            </Button>
            <Button
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              type="button"
              htmlType="submit"
            >
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormThemNguoiDung;
