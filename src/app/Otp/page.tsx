"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Sử dụng next/navigation cho App Router
import "./otp.css";
import { toast, ToastContainer } from "react-toastify"; // Import thư viện toast
import "react-toastify/dist/ReactToastify.css"; // Import CSS

const Otp = () => {
  const router = useRouter(); // Khởi tạo useRouter
  const [otp, setOtp] = useState(""); // Khởi tạo state cho OTP
  const email = localStorage.getItem("email"); // Lấy email từ localStorage

  console.log(email);
  const validateForm = () => {
    if (!otp) {
      toast.error("Otp không được để trống.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:8080/api/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp, email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      toast.success(data.message);
      router.push("/doimatkhau");
    } catch (error: any) {
      toast.error(error.message);
    }

    // if (response.ok) {
    //   toast.success("OTP đã được xác nhận thành công!"); // Thông báo xác nhận thành công
    //   router.push("/doimatkhau");
    // } else {
    //   const errorMessage = await response.text();
    //   toast.error(errorMessage || "OTP không hợp lệ hoặc đã hết hạn!"); // Thông báo lỗi
    // }
  };

  return (
    <div className="Otp-wrapper">
      <div className="Otp-container">
        <h2 style={{ marginLeft: "-362px", marginTop: "10px" }}>Nhập mã OTP</h2>
        <p
          style={{ marginLeft: "-208px", marginTop: "10px", fontSize: "13px" }}
        >
          Nhập mã OTP đã gửi đến địa chỉ email của bạn.
        </p>
        <br />
        <form className="Otp-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Mã OTP</label>
            <input
              type="text"
              placeholder="Mã otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn-Otp">
            Xác nhận
          </button>{" "}
          {/* Thay đổi từ <a> sang <button> */}
        </form>
      </div>
      <ToastContainer /> {/* Thêm ToastContainer để hiển thị thông báo */}
    </div>
  );
};

export default Otp;
