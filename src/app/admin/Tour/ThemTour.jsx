import React, { useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Modal,
  Upload,
  Image,
  Select,
  InputNumber,
  DatePicker,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
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

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const FormThemTour = ({ visible, onCancel, onBack }) => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);
  const [number, setNumber] = useState(1);
  const [loaiTourList, setLoaiTourList] = useState([]);

  useEffect(() => {
    const fetchLoaiTour = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/loaitours");
        setLoaiTourList(response.data);
      } catch (error) {
        console.error("Lỗi khi lấy danh sách loại tour:", error);
      }
    };

    fetchLoaiTour();
  }, []);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Tải lên</div>
    </div>
  );

  const onNumberChange = (value) => {
    setNumber(value);
  };

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
    try {
      const hinhAnhBase64 =
        fileList.length > 0 ? await getBase64(fileList[0].originFileObj) : "";

      const hinhAnhUrl = hinhAnhBase64
        ? await uploadImageToFirebase(hinhAnhBase64)
        : null;

      const tourData = {
        tenTour: values.tenTour,
        giaTour: values.giaTien,
        ngayBatDau: values.ngayBatDau.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
        ngayKetThuc: values.ngayKetThuc.format("YYYY-MM-DDTHH:mm:ss.SSSZ"),
        moTa: values.moTa,
        hinhAnh: hinhAnhUrl,
        video: values.video,
        soLuongNguoi: number,
        soTour: values.soTour,
        trangThai: true,
        loaiTour: { id: values.loaiTour }, // Sử dụng object thay vì chỉ ID
      };

      const response = await axios.post(
        "http://localhost:8080/api/tours/them",
        tourData
      );
      if (response.status === 200) {
        message.success("Tour đã được thêm thành công!");
        onCancel();
      }
    } catch (error) {
      if (error.response) {
        console.error("Lỗi khi thêm tour:", error.response.data);
        message.error(
          `Có lỗi xảy ra khi thêm tour: ${
            error.response.data.message || "Unknown error"
          }`
        );
      } else {
        console.error("Lỗi không phải từ server:", error);
        message.error("Có lỗi xảy ra khi thêm tour.");
      }
    }
  };

  return (
    <div className="container-fluid mt-5">
      <Modal
        title="Thêm Tour Du Lịch"
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
            <div className="col-lg-6">
              <Form.Item
                label="Tên Tour"
                name="tenTour"
                rules={[
                  { required: true, message: "Tên Tour không bỏ trống!" },
                ]}
              >
                <Input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Giá Tiền"
                name="giaTien"
                rules={[
                  { required: true, message: "Giá Tiền không bỏ trống!" },
                ]}
              >
                <Input className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Ngày Bắt Đầu"
                name="ngayBatDau"
                rules={[
                  { required: true, message: "Ngày Bắt Đầu không bỏ trống!" },
                ]}
              >
                <DatePicker className="w-100" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Ngày Kết Thúc"
                name="ngayKetThuc"
                rules={[
                  { required: true, message: "Ngày Kết Thúc không bỏ trống!" },
                ]}
              >
                <DatePicker className="w-100" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Số Lượng Người"
                name="soLuong"
                rules={[
                  { required: true, message: "Số Lượng Người không bỏ trống!" },
                ]}
              >
                <InputNumber
                  min={0}
                  defaultValue={number}
                  onChange={onNumberChange}
                  style={{ width: 200 }}
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Số Lượng Tour"
                name="soTour"
                rules={[
                  { required: true, message: "Số Lượng Tour không bỏ trống!" },
                ]}
              >
                <InputNumber
                  defaultValue={number}
                  onChange={onNumberChange}
                  style={{ width: 200 }}
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Loại Tour"
                name="loaiTour"
                rules={[
                  { required: true, message: "Loại Tour không bỏ trống!" },
                ]}
              >
                <Select placeholder="Chọn loại tour">
                  {loaiTourList.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.loaiTour} {/* Display the name here */}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item label="Hình Ảnh" name="hinhAnh">
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                >
                  {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal
                  visible={previewOpen}
                  title="Xem trước hình ảnh"
                  footer={null}
                  onCancel={() => setPreviewOpen(false)}
                >
                  <Image
                    alt="example"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item label="Video" name="video">
                <Input
                  placeholder="URL Video"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs"
                  rules={[
                    {
                      required: true,
                      message: "URL Video không bỏ trống!",
                    },
                    {
                      type: "url",
                      warningOnly: true,
                      message: "URL không hợp lệ!",
                    },
                  ]}
                />
              </Form.Item>
            </div>
            <div className="col-lg-12">
              <Form.Item label="Mô Tả" name="moTa">
                <TextArea rows={4} />
              </Form.Item>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <Button onClick={onBack}>Trở Về</Button>
            <Button type="primary" htmlType="submit">
              Thêm Tour
            </Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
};

export default FormThemTour;
