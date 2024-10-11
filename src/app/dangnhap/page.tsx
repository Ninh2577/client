// "use client";

// import React, { useState } from "react";
// import "./login.css";

// const PageLogin = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     // Reset lỗi
//     setEmailError("");
//     setPasswordError("");

//     // Kiểm tra xem các trường nhập liệu có trống không
//     let hasError = false;

//     if (!email) {
//       setEmailError("Email không được để trống.");
//       hasError = true;
//     }

//     if (!password) {
//       setPasswordError("Mật khẩu không được để trống.");
//       hasError = true;
//     }

//     if (hasError) return;

//     // Giả lập đăng nhập thành công
//     alert("Đăng nhập thành công!"); // Thay thế bằng logic thực tế của bạn
//     localStorage.setItem("user", JSON.stringify({ email })); // Lưu thông tin người dùng
//     window.location.href = "/"; // Chuyển hướng về trang chính
//   };

//   return (
//     <div className="login-wrapper">
//       <div className="login-container">
//         <h2>Đăng Nhập</h2>
//         <form className="login-form" onSubmit={handleLogin}>
//           <div className="input-login">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Địa chỉ email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             {emailError && <div className="error-message">{emailError}</div>}
//           </div>
//           <div className="input-login">
//             <label>Mật Khẩu</label>
//             <input
//               type="password"
//               placeholder="********"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {passwordError && (
//               <div className="error-message">{passwordError}</div>
//             )}
//           </div>
//           <a href="/quenmatkhau" className="forgot-password">
//             Quên mật khẩu?
//           </a>
//           <br />
//           <div className="checkbox-login">
//             <input
//               style={{ borderRadius: "4px" }}
//               type="checkbox"
//               className="remember"
//               id="remember"
//             />
//             <label htmlFor="remember">Ghi nhớ</label>
//           </div>
//           <button type="submit" className="btn-login">
//             Đăng nhập
//           </button>
//         </form>
//         <div className="signup-prompts">
//           Chưa có tài khoản? <a href="/dangky">Đăng ký</a>
//         </div>
//         <div className="separator">hoặc</div>
//         <div className="social-login">
//           <button className="btn-google">
//             <img
//               src={"./images/icons8-google-48.png"}
//               alt="Google Icon"
//               style={{ width: "25px", marginRight: "8px" }}
//             />
//             Đăng nhập với Google
//           </button>
//           <br />
//           <button style={{ marginTop: "-3px" }} className="btn-facebook">
//             <img
//               src={"./images/icons8-facebook-48.png"}
//               alt="Facebook Icon"
//               style={{ width: "25px", marginRight: "8px" }}
//             />
//             <span>Đăng nhập với Facebook</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

"use client";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; // Import thư viện
import "react-toastify/dist/ReactToastify.css"; // Import CSS của react-toastify
import "./login.css";

const PageLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Kiểm tra email hợp lệ
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Kiểm tra thông tin email và mật khẩu trước khi gửi yêu cầu đăng nhập
  const validateForm = () => {
    if (!email) {
      toast.error("Email không được để trống.");
      return false;
    } else if (!validateEmail(email)) {
      toast.error("Email không hợp lệ.");
      return false;
    }

    if (!password) {
      toast.error("Mật khẩu không được để trống.");
      return false;
    }

    return true;
  };

  // Hàm xử lý đăng nhập
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Kiểm tra form trước khi tiếp tục
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, matKhau: password }),
        credentials: "include",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Đăng nhập thất bại.");
      }

      const data = await response.json();
      console.log("Dữ liệu từ API: ", data);

      const token = data.token;
      const userEmail = data.email;
      const role = data.role;
      const userRole = role ? "admin" : "user"; // Lưu vai trò người dùng

      // Thông báo cho người dùng
      toast.success(`Đăng nhập thành công! Vai trò: ${userRole}`);

      // Lưu thông tin vào localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify({ userEmail }));

      // Chuyển hướng về trang chính
      window.location.href = "/";
    } catch (error: any) {
      toast.error(error.message || "Đăng nhập thất bại.");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2>Đăng Nhập</h2>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="input-login">
            <label>Email</label>
            <input
              type="text"
              placeholder="Địa chỉ email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-login">
            <label>Mật Khẩu</label>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <a href="/quenmatkhau" className="forgot-password">
            Quên mật khẩu?
          </a>

          <div className="checkbox-login">
            <input type="checkbox" className="remember" id="remember" />
            <label htmlFor="remember">Ghi nhớ</label>
          </div>

          <button type="submit" className="btn-login">
            Đăng nhập
          </button>
        </form>

        <div className="signup-prompts">
          Chưa có tài khoản? <a href="/dangky">Đăng ký</a>
        </div>

        <div className="separator">hoặc</div>

        <div className="social-login">
          <button className="btn-google">
            <img
              src="./images/icons8-google-48.png"
              alt="Google Icon"
              style={{ width: "25px", marginRight: "8px" }}
            />
            Đăng nhập với Google
          </button>

          <button className="btn-facebook" style={{ marginTop: "-3px" }}>
            <img
              src="./images/icons8-facebook-48.png"
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

export default PageLogin;
