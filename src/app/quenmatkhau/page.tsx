"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Sử dụng next/navigation cho App Router
import "./ForgotPassword.css";
import { toast, ToastContainer } from "react-toastify"; // Import thư viện
import "react-toastify/dist/ReactToastify.css"; // Import CSS của react-toastify

const ForgotPassword = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     console.log("Mã OTP đã được gửi đến:", email);

  //     router.push("/Otp");
  //   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email không được để trống.");
      return;
    }
    // Gửi yêu cầu đến API gửi mã OTP
    const response = await fetch("http://localhost:8080/api/send-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (response.ok) {
      toast.success("Mã OTP đã được gửi đến: " + email); // Hiển thị thông báo thành công
      router.push("/Otp");
    } else {
      const errorMessage = await response.json();
      toast.error(errorMessage.message || "Có lỗi xảy ra!"); // Hiển thị thông báo lỗi
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
