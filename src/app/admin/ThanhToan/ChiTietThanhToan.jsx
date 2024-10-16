import React, { useEffect, useState, useCallback } from "react";
import { Modal, Form, Table, QRCode, message, Button } from "antd";
import dayjs from "dayjs";
const { Column, ColumnGroup } = Table;

const FormChiTietThanhToan = ({ visible, onCancel, onBack, paymentId }) => {
  const [paymentDetails, setPaymentDetails] = useState(null);

  const fetchPaymentDetails = useCallback(async () => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/thanh-toan/info/${paymentId}` // Đường dẫn API đúng
      );
      if (!response.ok) {
        throw new Error("Cannot fetch payment information");
      }
      const data = await response.json();
      setPaymentDetails(data);
    } catch (error) {
      message.error("Failed to load payment information.");
      console.error("Error fetching payment details:", error);
    }
  }, [paymentId]);

  useEffect(() => {
    if (visible && paymentId) {
      fetchPaymentDetails();
    }
  }, [visible, paymentId, fetchPaymentDetails]);

  if (!paymentDetails) {
    return null; // Hoặc bạn có thể hiển thị một spinner đang tải tại đây
  }

  return (
    <Modal
      title="Chi Tiết Thông Tin Đơn Hàng"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="close" onClick={onBack}>
          Đóng
        </Button>,
      ]}
      width={900}
    >
      <h6>Thông tin khách hàng</h6>
      <Form layout="vertical">
        <div className="row">
          <div className="col-lg-4">
            <Form.Item label="Tên Khách Hàng" name="tenKhachHang">
              <h6>{paymentDetails.customerName}</h6>{" "}
              {/* Chỉnh sửa để lấy đúng thuộc tính */}
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Số điện thoại" name="soDienThoai">
              <h6>{paymentDetails.phoneNumber}</h6>{" "}
              {/* Chỉnh sửa để lấy đúng thuộc tính */}
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Email" name="email">
              <h6>{paymentDetails.email}</h6>{" "}
              {/* Chỉnh sửa để lấy đúng thuộc tính */}
            </Form.Item>
          </div>
        </div>
        <h6>Thông tin đơn hàng</h6>
        <div className="row">
          <div className="col-lg-4">
            <Form.Item label="Mã Đơn Hàng" name="id">
              <h6>{paymentDetails.paymentId}</h6>{" "}
              {/* Chỉnh sửa để lấy đúng thuộc tính */}
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Trạng Thái" name="trangThai">
              <h6>
                {paymentDetails.paymentStatus
                  ? "Đã thanh toán"
                  : "Chưa thanh toán"}
              </h6>{" "}
              {/* Giả định trạng thái */}
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Ngày Đặt" name="ngayDat">
              <h6>{dayjs(paymentDetails.paymentDate).format("DD/MM/YYYY")}</h6>{" "}
              {/* Chỉnh sửa để lấy đúng thuộc tính */}
            </Form.Item>
          </div>
        </div>
        <Table
          className="table-centered"
          dataSource={[paymentDetails]} // Đảm bảo dataSource là mảng
          bordered
          size="middle"
          scroll={{ x: 700 }}
        >
          <Column
            title="ID"
            dataIndex="paymentId"
            key="paymentId"
            width={50}
            fixed="left"
          />
          <Column
            title="Tên Tour"
            dataIndex="tourName"
            key="tourName"
            width={100}
            fixed="left"
          />
          <ColumnGroup title="Số Lượng Người">
            <Column
              title="Số Lượng Tối Đa"
              dataIndex="numberOfPeople"
              key="numberOfPeople"
            />
            <Column
              title="Số Lượng Người"
              dataIndex="soLuongNguoi"
              key="soLuongNguoi"
            />
          </ColumnGroup>

          <Column title="Tổng tiền" dataIndex="totalAmount" key="totalAmount" />
          <Column
            title="QRCode"
            key="qrcode"
            render={(_, record) => (
              <QRCode
                value={`http://localhost:8080/api/thanh-toan/${record.paymentId}`} // Sửa lại giá trị QRCode
              />
            )}
          />
        </Table>
      </Form>
    </Modal>
  );
};

export default FormChiTietThanhToan;
