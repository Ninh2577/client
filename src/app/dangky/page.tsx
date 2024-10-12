// import React, { useState } from 'react';
// import './signup.css';
// import RadioGroup from '@/components/radio';

// const PageSignUp = () => {
//   return (
//     <div className="register-wrapper">
//       <div className="register-container">
//         <img src={'./images/trend.png'} alt="VJobs logo"
//           style={{
//             marginLeft: '0px', width: 'auto', height: '40px', fontSize: '1.5rem',
//             marginTop: '-20px', flexShrink: '0'
//           }} />
//         <h2>Đăng Ký</h2>
//         <br/>
//         <form className="register-form">
//           <div className='row'>
//             <div className='col-6'>
//               <div className="input-register">
//                 <label>Họ tên</label>
//                 <input type="text" placeholder="Họ và tên" />
//               </div>
//               <div className="input-register">
//                 <label>Email</label>
//                 <input type="email" placeholder="Địa chỉ email" />
//               </div>
//               <div className="input-register">
//                 <label>Mật khẩu</label>
//                 <input type="password" placeholder="********" />
//               </div>
//               <div className="input-register">
//                 <label>SĐT</label>
//                 <input type="text" placeholder="Số điện thoại" />
//               </div>

//             </div>
//             <div className='col-7'>
//               <div className="input-register">
//                 <label>Địa chỉ</label>
//                 <input type="text" placeholder="Địc chỉ" />
//               </div>
//               <div className="input-register">
//                 <label>Năm sinh</label>
//                 <input type="date" placeholder="năm sinh" />
//               </div>
//               <div className='rolessss'>
//                 <label>Giới tính</label>
//                 <br />
//                 <RadioGroup/>
//               </div>
//             </div>
//           </div>

//           <br />
//           <div className="checkbox-register">
//             <input type="checkbox" className="remembers" id="remember" />
//             <label htmlFor="remember">Tôi muốn đăng ký nhận thông báo qua email.</label>
//           </div>
//           <button type="submit" className="btn-register">Đăng ký</button>
//         </form>
//         <div className="signup-register">
//           Đã có tài khoản? <a href="/login">Đăng nhập</a>
//         </div>
//         <div className="separator">hoặc</div>
//         <div className="social-register">
//           <button className="btn-google">
//             <img src={'./images/icons8-google-48.png'} alt="Google Icon"
//               style={{ width: '25px', marginRight: '8px' }} />
//             Đăng ký với Google
//           </button>
//           <br />
//           <button style={{ marginTop: '-3px' }} className="btn-facebook">
//             <img src={'./images/icons8-facebook-48.png'} alt="Facebook Icon"
//               style={{ width: '25px', marginRight: '8px' }} />
//             Đăng ký với Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageSignUp;
"use client";
import React, { useState, useEffect } from "react";
import "./signup.css";
import { toast, ToastContainer } from "react-toastify"; // Import thư viện
import "react-toastify/dist/ReactToastify.css"; // Import CSS của react-toastify
import RadioGroup from "@/components/radio";

const PageSignUp = () => {
  // Sử dụng useEffect để gọi API khi component render
  // useEffect(() => {
  //   // Gọi API để lấy dữ liệu bảo vệ
  //   fetch("http://localhost:8080/api/protected", {
  //     method: "GET",
  //     credentials: "include", // Đảm bảo cookie token được gửi đi
  //   })
  //     .then((response) => response.json()) // Chuyển đổi phản hồi thành JSON
  //     .then((data) => console.log(data.token)); // In ra token
  // }, []);

  const [hoTen, setHoTen] = useState("");
  const [email, setEmail] = useState("");
  const [matKhau, setMatKhau] = useState("");
  const [soDienThoai, setSoDienThoai] = useState("");
  const [diaChi, setDiaChi] = useState("");
  const [namSinh, setNamSinh] = useState("");
  const [gioiTinh, setGioiTinh] = useState(1);

  // Kiểm tra email hợp lệ
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneRegex = /^(?:\+?(\d{1,3}))?(\d{10})$/; // Kiểm tra số điện thoại Việt Nam
    return phoneRegex.test(phoneNumber);
  };
  const handleGioiTinhChange = (value: number) => {
    setGioiTinh(value); // Cập nhật giới tính khi thay đổi
  };

  const validateForm = () => {
    if (!hoTen) {
      toast.error("Họ tên không được để trống!");
      return false;
    }

    if (!email) {
      toast.error("Email không được để trống.");
      return false;
    } else if (!validateEmail(email)) {
      toast.error("Email không hợp lệ.");
      return false;
    }

    if (!matKhau) {
      toast.error("Mật khẩu không được để trống!");
      return false;
    }
    if (!soDienThoai) {
      toast.error("Số điện thoại không được để trống!");
      return false;
    } else if (!validatePhoneNumber(soDienThoai)) {
      toast.error("Số điện thoại không hợp lệ.");
      return false;
    }

    if (!diaChi) {
      toast.error("Địa chỉ không được để trống!");
      return false;
    }
    if (!namSinh) {
      toast.error("Năm sinh không được để trống!");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(hoTen, email, matKhau, diaChi, soDienThoai);

    // Kiểm tra form trước khi tiếp tục
    if (!validateForm()) return;
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hoTen,
          email,
          soDienThoai,
          diaChi,
          matKhau,
          gioiTinh,
          namSinh,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        toast.success(data.msg); // Hiển thị thông báo thành công
        // Chuyển hướng về trang chính
        window.location.href = "http://localhost:3000/dangnhap";
      } else {
        toast.error(data.msg); // Hiển thị thông báo thành công
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <h2>Đăng Ký</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-register">
            <label>Họ Tên</label>
            <input
              type="text"
              placeholder="Họ và tên"
              onChange={(e) => setHoTen(e.target.value)}
            />
          </div>
          <div className="input-register">
            <label>Email</label>
            <input
              type="text"
              placeholder="Địa chỉ email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-register">
            <label>Mật Khẩu</label>
            <input
              type="password"
              placeholder="********"
              onChange={(e) => setMatKhau(e.target.value)}
            />
          </div>
          <div className="input-register">
            <label>SĐT</label>
            <input
              type="text"
              placeholder="Số điện thoại"
              onChange={(e) => setSoDienThoai(e.target.value)}
            />
          </div>
          <div className="input-register">
            <label>Địa chỉ</label>
            <input
              type="text"
              placeholder="Địa chỉ"
              onChange={(e) => setDiaChi(e.target.value)}
            />
          </div>
          <div className="input-register">
            <label>Năm sinh</label>
            <input
              type="date"
              onChange={(e) => setNamSinh(e.target.value)} // Lưu giá trị theo định dạng YYYY-MM-DD
            />
          </div>
          <div className="rolessss" style={{ marginLeft: "-356px" }}>
            <label>Giới tính</label>
            <br />
            <RadioGroup onGenderChange={handleGioiTinhChange} />
          </div>
          <br />
          <br />
          <div className="checkbox-register">
            <input
              type="checkbox"
              style={{ borderRadius: "4px" }}
              className="remember"
              id="remember"
            />
            <label htmlFor="remember">
              Tôi muốn đăng ký nhận thông báo qua email.
            </label>
          </div>
          <button type="submit" className="btn-register">
            Đăng ký
          </button>
        </form>
        <div className="signup-prompts">
          Đã có tài khoản? <a href="/dangnhap">Đăng nhập</a>
        </div>
        <div className="separator">hoặc</div>
        <div className="social-register">
          <button className="btn-google">
            <img
              src={"./images/icons8-google-48.png"}
              alt="Google Icon"
              style={{ width: "25px", marginRight: "8px" }}
            />
            Đăng nhập với Google
          </button>
          <br />
          <button style={{ marginTop: "-12px" }} className="btn-facebook">
            <img
              src={"./images/icons8-facebook-48.png"}
              alt="Facebook Icon"
              style={{ width: "25px", marginRight: "8px" }}
            />
            Đăng nhập với Facebook
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PageSignUp;
