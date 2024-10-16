import React, { useState, useEffect } from "react";
import {
  Button,
  Checkbox,
  DatePicker,
  Form,
  Input,
  Modal,
  Upload,
  Select,
  message,
  Image,
} from "antd";
// Định dạng ngày tháng năm
import moment from "moment";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";

const { TextArea } = Input;

const firebaseConfig = {
  apiKey: "AIzaSyAtXg4mkxx1gic_VlvyxWcEloGZ6VFyymg",
  authDomain: "travel-e7f79.firebaseapp.com",
  projectId: "travel-e7f79",
  storageBucket: "travel-e7f79.appspot.com",
  messagingSenderId: "52519186637",
  appId: "1:52519186637:web:d0bb8aa8a499a7179b3984",
  measurementId: "G-HLNSGQZCPH",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!file || !file.originFileObj) {
      reject(new Error("Đối tượng tệp không hợp lệ"));
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file.originFileObj);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const FormCapNhatTour = ({
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
  const [loaiTourList, setLoaiTourList] = useState([]);

  useEffect(() => {
    if (userData) {
      setFileList(userData.hinhAnh ? [{ url: userData.hinhAnh }] : []);
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
    try {
      const hinhAnhBase64 =
        fileList.length > 0 && fileList[0].originFileObj
          ? await getBase64(fileList[0])
          : "";
      const hinhAnhUrl = hinhAnhBase64
        ? await uploadImageToFirebase(hinhAnhBase64)
        : userData?.hinhAnh;

      const formData = {
        tenTour: values.tenTour,
        giaTour: values.giaTour,
        ngayBatDau: values.ngayBatDau.format("YYYY-MM-DD"),
        ngayKetThuc: values.ngayKetThuc.format("YYYY-MM-DD"),
        soTour: values.soTour,
        soLuongNguoi: values.soLuongNguoi,
        hinhAnh: hinhAnhUrl,
        video: values.video,
        moTa: values.moTa,
        trangThai: values.trangThai ? "true" : "false",
        loaiTour: {
          id: values.loaiTour,
        },
      };
      Object.keys(formData).forEach((element) => {
        console.log("data  " + element + " " + formData[element]);
      });
      // console.log("data length " + Array.keys(userData).length);
      if (userData?.id) {
        const response = await axios.put(
          `http://localhost:8080/api/tours/update/${userData.id}`,
          formData
        );
        onUpdateSuccess();
        setLoaiTourList(response.data);
        console.log(response.data);
        message.success("Cập nhật tour thành công");
      } else {
        message.error("Không tìm thấy tour để cập nhật");
      }

      onCancel();
    } catch (error) {
      console.error(
        "Lỗi cập nhật tour:",
        error.response?.data || error.message
      );
      console.error("Lỗi cập nhật tour:", error);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <Modal
        title="Cập Nhật Tour"
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
            tenTour: userData?.tenTour,
            giaTour: userData?.giaTour,
            ngayBatDau: moment(userData?.ngayBatDau),
            ngayKetThuc: moment(userData?.ngayKetThuc),
            soLuongNguoi: userData?.soLuongNguoi,
            soTour: userData?.soTour,
            video: userData?.video,
            moTa: userData?.moTa,
            trangThai: userData?.trangThai === "true" ? true : false,
            loaiTour: userData?.loaiTour?.loaiTour,
          }}
        >
          <div className="row">
            <div className="col-lg-6">
              <Form.Item
                label="Tên Tour"
                name="tenTour"
                rules={[
                  { required: true, message: "Tên tour không được để trống!" },
                ]}
              >
                <Input
                  placeholder="Tên Tour"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Giá Tour"
                name="giaTour"
                rules={[
                  { required: true, message: "Giá tour không được để trống!" },
                ]}
              >
                <Input
                  placeholder="Giá Tour"
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Ngày Bắt Đầu"
                name="ngayBatDau"
                rules={[
                  {
                    required: true,
                    message: "Ngày bắt đầu không được để trống!",
                  },
                ]}
              >
                <DatePicker
                  className="w-full"
                  format="YYYY-MM-DD"
                  placeholder="Ngày Bắt Đầu"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Ngày Kết Thúc"
                name="ngayKetThuc"
                rules={[
                  {
                    required: true,
                    message: "Ngày kết thúc không được để trống!",
                  },
                ]}
              >
                <DatePicker
                  className="w-full"
                  format="YYYY-MM-DD"
                  placeholder="Ngày Kết Thúc"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Số Tour"
                name="soTour"
                rules={[
                  { required: true, message: "Số tour không được để trống!" },
                ]}
              >
                <Input
                  placeholder="Số Tour"
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Số Người"
                name="soLuongNguoi"
                rules={[
                  {
                    required: true,
                    message: "Số lượng người không được để trống!",
                  },
                ]}
              >
                <Input
                  placeholder="Số Người"
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item label="Video" name="video">
                <Input
                  placeholder="Video"
                  type="text"
                  id="small-input"
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Hình Ảnh"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={handlePreview}
                  onChange={handleChange}
                  maxCount={1}
                >
                  {fileList.length < 1 && uploadButton}
                </Upload>
                <Modal
                  open={previewOpen}
                  footer={null}
                  onCancel={() => setPreviewOpen(false)}
                >
                  <Image
                    alt="Preview"
                    style={{ width: "100%" }}
                    src={previewImage}
                  />
                </Modal>
              </Form.Item>
            </div>
            <div className="col-lg-12">
              <Form.Item label="Mô Tả" name="moTa">
                <TextArea rows={4} placeholder="Mô Tả" />
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Trạng Thái"
                name="trangThai"
                rules={[{ required: true }]}
              >
                <Select placeholder="Chọn trạng thái" allowClear>
                  <Select.Option value="true">Còn</Select.Option>
                  <Select.Option value="false">Hết</Select.Option>
                </Select>
              </Form.Item>
            </div>
            <div className="col-lg-6">
              <Form.Item
                label="Loại Tour"
                name="loaiTour"
                rules={[{ required: true }]}
              >
                <Select placeholder="Chọn loại tour" allowClear>
                  {loaiTourList.map((item) => (
                    <Select.Option key={item.id} value={item.id}>
                      {item.id.loaiTour}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </div>
          </div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="mr-3">
              Cập Nhật
            </Button>
            <Button onClick={onCancel}>Quay lại</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FormCapNhatTour;
