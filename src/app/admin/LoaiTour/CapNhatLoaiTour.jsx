import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal } from "antd";
import "bootstrap/dist/css/bootstrap.min.css";
const { TextArea } = Input;
const FormThemLoaiTour = ({ visible, onCancel, onBack }) => {
  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <div className="container-fluid mt-5">
      <Modal
        title="Phân Loại Tour"
        visible={visible}
        onCancel={onCancel}
        footer={null}
        width={900} // Điều chỉnh chiều rộng modal
      >
        <Checkbox
          className="mb-3"
          checked={componentDisabled}
          onChange={(e) => setComponentDisabled(e.target.checked)}
        >
          Vô hiệu hóa biểu mẫu
        </Checkbox>
        <Form
          layout="vertical" // Đổi layout thành dọc (vertical)
          disabled={componentDisabled}
        >
          <div className="row">
            <div className="col-lg-12">
              <Form.Item
                label="Loại Tour"
                name="loaiTour"
                rules={[
                  {
                    required: true,
                    message: "Loại Tour không bỏ trống!",
                  },
                ]}
              >
                <Input placeholder="Loại Tour" />
              </Form.Item>
              <div className="col-lg-12">
                <Form.Item label="Mô tả">
                  <TextArea rows={3} placeholder="Mô tả" />
                </Form.Item>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-3">
            <Button className="btn btn-secondary" onClick={onBack}>
              Quay Lại
            </Button>
            <Button
              className="btn btn-primary"
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

export default FormThemLoaiTour;
