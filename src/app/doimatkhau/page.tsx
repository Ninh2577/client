"use client"; // Đảm bảo sử dụng client component
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter
import "./ResetPassword.css";
import { toast, ToastContainer } from "react-toastify"; // Import thư viện
import "react-toastify/dist/ReactToastify.css"; // Import CSS của react-toastify

const PageResetPassword = () => {
  const router = useRouter(); // Khởi tạo useRouter
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const email = localStorage.getItem("email"); // Lấy email từ localStorage

  const validateForm = () => {
    if (!newPassword) {
      toast.error("mật khẩu không được để trống.");
      return false;
    }
    if (!confirmPassword) {
      toast.error("Xát nhận mật khẩu không được để trống.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      // Gửi yêu cầu đến API để đổi mật khẩu
      const response = await fetch("http://localhost:8080/api/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, newPassword, confirmPassword }),
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
  };
  return (
    <div className="ResetPassword-wrapper">
      <div className="ResetPassword-container">
        <h2
          style={{ marginLeft: "-325px", fontFamily: '"Arial", "sans-serif"' }}
        >
          Đặt Lại Mật Khẩu
        </h2>
        <br />
        <form className="ResetPassword-form" onSubmit={handleSubmit}>
          <div className="input-ResetPassword">
            <label>Mật khẩu mới</label>
            <input
              type="password"
              placeholder="********"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="input-ResetPassword">
            <label>Xác nhận mật khẩu mới</label>
            <input
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" className="btn-ResetPassword">
            Đổi mật khẩu
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PageResetPassword;
