import React, { useEffect, useState, useCallback } from "react";
import { Modal, Form, Table, QRCode, message, Button, Spin } from "antd";
import dayjs from "dayjs";
import "./DatTour.css";

const { Column, ColumnGroup } = Table;

const FormChiTietDatTour = ({ visible, onCancel, onBack, tourId }) => {
  const [datTourDetails, setDatTourDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTourDetails = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:8080/api/dat-tour/info/${tourId}`
      );
      if (!response.ok) {
        throw new Error("Không thể tải thông tin tour");
      }
      const data = await response.json();
      setDatTourDetails(data);
    } catch (error) {
      message.error("Tải thông tin tour thất bại.");
      console.error("Lỗi khi tải chi tiết tour:", error);
    } finally {
      setLoading(false);
    }
  }, [tourId]);

  useEffect(() => {
    if (visible && tourId) {
      fetchTourDetails();
    }
  }, [visible, tourId, fetchTourDetails]);

  if (loading) {
    return <Spin size="large" />; // Hiển thị biểu tượng loading khi đang tải dữ liệu
  }

  if (!datTourDetails) {
    return null; // Hoặc hiển thị một thông báo rằng không có dữ liệu
  }

  return (
    <Modal
      title="Chi Tiết Thông Tin Đơn Hàng"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onBack}>
          Quay Lại
        </Button>,
        <Button key="confirm" type="primary" onClick={onCancel}>
          Xác Nhận
        </Button>,
      ]}
      width={900}
    >
      <h6>Thông tin khách hàng</h6>
      <Form layout="vertical">
        <div className="row">
          <div className="col-lg-4">
            <Form.Item label="Tên Khách Hàng">
              <h6>{datTourDetails.tenKhachHangs}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Số điện thoại">
              <h6>{datTourDetails.soDienThoais}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Email">
              <h6>{datTourDetails.emails}</h6>
            </Form.Item>
          </div>
        </div>

        <h6>Thông tin đơn hàng</h6>
        <div className="row">
          <div className="col-lg-4">
            <Form.Item label="Mã Đơn Hàng">
              <h6>DH{datTourDetails.ids}</h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Trạng Thái">
              <h6>
                {datTourDetails.trangThais
                  ? "Đã thanh toán"
                  : "Chưa thanh toán"}
              </h6>
            </Form.Item>
          </div>
          <div className="col-lg-4">
            <Form.Item label="Ngày Đặt">
              <h6>
                {dayjs(datTourDetails.ngayDats).format("DD/MM/YYYY HH:mm")}
              </h6>
            </Form.Item>
          </div>
        </div>
        <Table
          className="table-centered"
          dataSource={[
            {
              key: datTourDetails.idTours, // Đảm bảo 'key' là duy nhất cho mỗi hàng
              ...datTourDetails, // Sử dụng spread operator để thêm tất cả thuộc tính của datTourDetails
              maTour: `MT${datTourDetails.idTours}`, // Thêm trường maTour
            },
          ]}
          bordered
          size="middle"
          scroll={{ x: 700 }}
          rowKey="key" // Sử dụng 'key' cho rowKey
        >
          <Column
            title="ID"
            dataIndex="idTours"
            key={`idTours-${datTourDetails.idTours}`} // Đảm bảo cột có 'key' duy nhất
            width={50}
            fixed="left"
          />
          <Column
            title="Tên Tour"
            dataIndex="tenTours"
            key={`tenTours-${datTourDetails.idTours}`} // Đảm bảo cột có 'key' duy nhất
            width={100}
            fixed="left"
          />
          <Column
            title="Mã Tour"
            dataIndex="maTour"
            key={`maTour-${datTourDetails.idTours}`}
            width={150}
          />
          <ColumnGroup title="Số Lượng Người">
            <Column
              title="Số Lượng Tối Đa"
              dataIndex="soLuongNguois"
              key={`soLuongNguois-${datTourDetails.idTours}`} // Đảm bảo key duy nhất
            />
            <Column
              title="Số Lượng Đặt"
              dataIndex="soNguois"
              key={`soNguois-${datTourDetails.idTours}`} // Đảm bảo key duy nhất
            />
          </ColumnGroup>
          <Column
            title="Tiền"
            dataIndex="tiens"
            key={`tiens-${datTourDetails.idTours}`}
          />
          <Column
            title="Giảm Giá"
            dataIndex="giamGias"
            key={`giamGias-${datTourDetails.idTours}`}
          />
          <Column
            title="Tổng Tiền"
            dataIndex="tongTiens"
            key={`tongTiens-${datTourDetails.idTours}`}
          />
          <Column
            title="Mã QR"
            dataIndex="qrCodes"
            key={`qrCodes-${datTourDetails.idTours}`} // Đảm bảo key duy nhất
            render={(text, record) => (
              <QRCode
                key={`qr-${record.idTours}`} // Đảm bảo key duy nhất cho QRCode
                value={`http://localhost:8080/api/dat-tour/${text}`}
              />
            )}
          />
        </Table>
      </Form>
    </Modal>
  );
};

export default FormChiTietDatTour;
