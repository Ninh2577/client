

'use client';

import React, { useState } from 'react';
import './login.css';


const PageLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset lỗi
        setEmailError('');
        setPasswordError('');

        // Kiểm tra xem các trường nhập liệu có trống không
        let hasError = false;

        if (!email) {
            setEmailError("Email không được để trống.");
            hasError = true;
        }

        if (!password) {
            setPasswordError("Mật khẩu không được để trống.");
            hasError = true;
        }

        if (hasError) return;

        // Giả lập đăng nhập thành công
        alert('Đăng nhập thành công!'); // Thay thế bằng logic thực tế của bạn
        localStorage.setItem('user', JSON.stringify({ email })); // Lưu thông tin người dùng
        window.location.href = '/'; // Chuyển hướng về trang chính
    };

    return (
        <div className="login-wrapper">
            <div className="login-container">
                <h2 >Đăng Nhập</h2>
                <form className="login-form" onSubmit={handleLogin}>
                    <div className="input-login">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Địa chỉ email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {emailError && <div className="error-message">{emailError}</div>}
                    </div>
                    <div className="input-login">
                        <label>Mật Khẩu</label>
                        <input
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {passwordError && <div className="error-message">{passwordError}</div>}
                    </div>
                    <a href="/ForgotPassword" className="forgot-password">Quên mật khẩu?</a>
                    <br />
                    <div className="checkbox-login">
                        <input  style={{borderRadius:'4px'}} type="checkbox" className="remember" id="remember" />
                        <label htmlFor="remember">Ghi nhớ</label>
                    </div>
                    <button type="submit" className="btn-login">Đăng nhập</button>
                </form>
                <div className="signup-prompts">
                    Chưa có tài khoản? <a href="/signup">Đăng ký</a>
                </div>
                <div className="separator">hoặc</div>
                <div className="social-login">
                    <button className="btn-google">
                        <img src={'./images/icons8-google-48.png'} alt="Google Icon" style={{ width: '25px', marginRight: '8px' }} />
                        Đăng nhập với Google
                    </button>
                    <br />
                    <button style={{ marginTop: '-3px' }} className="btn-facebook">
                        <img src={'./images/icons8-facebook-48.png'} alt="Facebook Icon" style={{ width: '25px', marginRight: '8px' }} />
                        <span>Đăng nhập với Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageLogin;




