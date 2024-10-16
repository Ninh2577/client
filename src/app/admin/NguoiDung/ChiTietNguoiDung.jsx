import React, { useState, useEffect } from "react";
import { Button, Modal, Form, Table, Image, message } from "antd";
import axios from "axios";

const { Column } = Table;

const ChiTietNguoiDung = ({ visible, onCancel, onBack, userId }) => {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    if (userId) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            `http://localhost:8080/api/nguoidung/${userId}`
          );
          setUserInfo(response.data); // Lưu thông tin người dùng vào state
        } catch (error) {
          message.error("Không thể tải dữ liệu người dùng.");
          console.error("Error fetching user data:", error);
        }
      };

      fetchUser();
    }
  }, [userId]); // Gọi lại khi userId thay đổi

  if (!userInfo) {
    return null; // Hoặc có thể hiển thị loader khi chưa có dữ liệu
  }

  return (
    <Modal
      title="Chi Tiết Thông Tin Người Dùng"
      visible={visible}
      onCancel={onCancel}
      footer={null}
      width={900}
    >
      <Form layout="vertical">
        <div className="row">
          <div className="col-lg-4">
            <Form.Item label="Tên Khách Hàng">
              <h6>{userInfo.hoTen}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Số điện thoại">
              <h6>{userInfo.soDienThoai}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Email">
              <h6>{userInfo.email}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Tuổi">
              <h6>{userInfo.tuoi}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Giới Tính">
              <h6>{userInfo.gioiTinh ? "Nam" : "Nữ"}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Vai Trò">
              <h6>{userInfo.vaiTro?.vaiTro || "Chưa có vai trò"}</h6>
            </Form.Item>
          </div>
        </div>

        <Table
          dataSource={[userInfo]}
          bordered
          size="middle"
          scroll={{ x: 1000 }}
        >
          <Column title="ID" dataIndex="id" key="id" width={50} fixed="left" />
          <Column title="Địa Chỉ" dataIndex="diaChi" key="diaChi" />
          <Column
            title="Ảnh"
            dataIndex="hinhAnh"
            key="hinhAnh"
            render={(text) => <Image src={text} width={150} />}
          />
          <Column
            title="Ảnh CCCD Mặt Trước"
            dataIndex="anhCCCDtruoc"
            key="anhCCCDtruoc"
            render={(text) => <Image src={text} width={150} />}
          />
          <Column
            title="Ảnh CCCD Mặt Sau"
            dataIndex="anhCCCDsau"
            key="anhCCCDsau"
            render={(text) => <Image src={text} width={150} />}
          />
        </Table>

        <div className="d-flex justify-content-between mt-3">
          <Button className="btn btn-secondary" onClick={onBack}>
            Quay Lại
          </Button>
          <Button className="btn btn-primary" onClick={onCancel}>
            Xác Nhận
          </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ChiTietNguoiDung;
