"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Sử dụng next/navigation cho App Router
import "./ForgotPassword.css";
import { toast, ToastContainer } from "react-toastify"; // Import thư viện
import "react-toastify/dist/ReactToastify.css"; // Import CSS của react-toastify

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  // Kiểm tra email hợp lệ
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    if (!email) {
      toast.error("Email không được để trống.");
      return false;
    } else if (!validateEmail(email)) {
      toast.error("Email không hợp lệ.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kiểm tra form trước khi tiếp tục
    if (!validateForm()) return;
    try {
      const response = await fetch("http://localhost:8080/api/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Gửi OTP thất bại.");
      }

      const data = await response.json();
      toast.success(data.message);
      localStorage.setItem("email", email); // Lưu email vào localStorage
      router.push("/Otp");
    } catch (error: any) {
      toast.error(error.message || "Gửi OTP thất bại.");
    }
  };

  return (
    <div className="forgotPassword-wrapper">
      <div className="forgotPassword-container">
        <div style={{ marginLeft: "-330px", marginBottom: "10px" }}>
          <h2 style={{ marginLeft: "-5px" }}>Đặt lại mật khẩu</h2>
          <p style={{ marginLeft: "317px", fontSize: "13px" }}>
            Nhập địa chỉ email của bạn. Chúng tôi sẽ gửi mã OTP để bạn đặt lại
            mật khẩu.
          </p>
        </div>
        <form className="forgotPassword-form" onSubmit={handleSubmit}>
          <div className="input-forgot">
            <label>Email</label>
            <input
              type="text"
              placeholder="Địa chỉ email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn-forgotPassword">
            Gửi
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
