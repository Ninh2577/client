import React, { useState, useEffect } from "react";
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
import moment from "moment";
import { PlusOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

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
const storage = getStorage(app);

// Function to convert file to base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!file || !file.originFileObj) {
      reject(new Error("Invalid file object"));
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// Function to normalize the file input for Upload component
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const FormCapNhatNguoiDung = ({
  visible,
  onCancel,
  onBack,
  userData,
  onUpdateSuccess,
}) => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [fileCCCDtruoc, setFileCCCDtruoc] = useState([]);
  const [fileCCCDsau, setFileCCCDsau] = useState([]);

  // Update fileList when userData changes
  useEffect(() => {
    if (userData) {
      setFileList(userData.hinhAnh ? [{ url: userData.hinhAnh }] : []);
      setFileCCCDtruoc(
        userData.anhCCCDtruoc ? [{ url: userData.anhCCCDtruoc }] : []
      );
      setFileCCCDsau(userData.anhCCCDsau ? [{ url: userData.anhCCCDsau }] : []);
    }
  }, [userData]);

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
      throw error;
    }
  };

  const onFinish = async (values) => {
    // Tính toán tuổi
    const currentYear = moment().year();
    const birthYear = values.namSinh ? values.namSinh.year() : null;
    const tuoi = birthYear ? currentYear - birthYear : null; // Tính tuổi
    try {
      const hinhAnhBase64 =
        fileList.length > 0 && fileList[0].originFileObj
          ? await getBase64(fileList[0])
          : "";
      const anhCCCDtruocBase64 =
        fileCCCDtruoc.length > 0 && fileCCCDtruoc[0].originFileObj
          ? await getBase64(fileCCCDtruoc[0])
          : "";
      const anhCCCDsauBase64 =
        fileCCCDsau.length > 0 && fileCCCDsau[0].originFileObj
          ? await getBase64(fileCCCDsau[0])
          : "";

      // Continue with your upload logic
      const hinhAnhUrl = hinhAnhBase64
        ? await uploadImageToFirebase(hinhAnhBase64)
        : userData?.hinhAnh; // Use existing image if no new upload
      const anhCCCDtruocUrl = anhCCCDtruocBase64
        ? await uploadImageToFirebase(anhCCCDtruocBase64)
        : userData?.anhCCCDtruoc;
      const anhCCCDsauUrl = anhCCCDsauBase64
        ? await uploadImageToFirebase(anhCCCDsauBase64)
        : userData?.anhCCCDsau;

      const formData = {
        hoTen: values.hoTen,
        email: values.email,
        soDienThoai: values.soDienThoai,
        diaChi: values.diaChi,
        matKhau: values.matKhau,
        hinhAnh: hinhAnhUrl,
        gioiTinh: values.gioiTinh === "Nam",
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
        tuoi: tuoi,
      };

      if (userData?.id) {
        // Update user
        const response = await axios.put(
          `http://localhost:8080/api/nguoidung/update/${userData.id}`,
          formData
        );
        onUpdateSuccess(); // gọi lại hàm
        onCancel(); // Close the modal
        console.log("User updated successfully:", response.data);
        message.success("Cập nhật người dùng thành công");
      } else {
        message.error("Không tìm thấy người dùng để cập nhật");
      }

      onCancel();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <Modal
        title="Cập Nhật Người Dùng"
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
          initialValues={{
            hoTen: userData?.hoTen,
            email: userData?.email,
            soDienThoai: userData?.soDienThoai,
            diaChi: userData?.diaChi,
            matKhau: userData?.matKhau,
            cccd: userData?.cccd,
            namSinh: userData?.namSinh ? moment(userData.namSinh) : null,
            gioiTinh: userData?.gioiTinh ? "Nam" : "Nữ",
            vaiTro: userData?.vaiTro?.vaiTro,
          }}
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
                  {
                    required: true,
                    message: "Số điện thoại không được để trống!",
                  },
                ]}
              >
                <Input
                  placeholder="Số Điện Thoại"
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
              <Form.Item label="Ngày sinh" name="namSinh">
                <DatePicker style={{ width: "100%" }} format={"DD/MM/YYYY"} />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item label="Giới tính" name="gioiTinh">
                <Radio.Group>
                  <Radio value="Nam">Nam</Radio>
                  <Radio value="Nữ">Nữ</Radio>
                </Radio.Group>
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Địa chỉ"
                name="diaChi"
                rules={[
                  { required: true, message: "Địa chỉ không được để trống!" },
                ]}
              >
                <TextArea placeholder="Địa chỉ" rows={3} />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="CCCD"
                name="cccd"
                rules={[
                  { required: true, message: "CCCD không được để trống!" },
                ]}
              >
                <Input
                  placeholder="CCCD"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  id="small-input"
                />
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
              <Form.Item
                label="Hình ảnh"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length < 1 && uploadButton}
                </Upload>
                <Modal
                  open={previewOpen}
                  footer={null}
                  onCancel={() => setPreviewOpen(false)}
                >
                  <Image preview={false} alt="Preview" src={previewImage} />
                </Modal>
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item label="Ảnh CCCD Trước">
                <Upload
                  action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload" // Your upload URL
                  listType="picture"
                  maxCount={1}
                  fileList={fileCCCDtruoc}
                  onPreview={handlePreview}
                  onChange={handleCCCDtruocChange}
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
                  fileList={fileCCCDsau}
                  onPreview={handlePreview}
                  onChange={handleCCCDsauChange}
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
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button type="primary" htmlType="submit">
              Cập nhật
            </Button>
            <Button onClick={onBack}>Quay lại</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default FormCapNhatNguoiDung;
