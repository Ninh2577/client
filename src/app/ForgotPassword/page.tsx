"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Sử dụng next/navigation cho App Router
import './ForgotPassword.css';


const ForgotPassword = () => {
    const router = useRouter(); // Khởi tạo useRouter
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form

        // Logic gửi mã OTP qua email
        // Giả lập gửi mã thành công và chuyển đến trang OTP
        // Bạn có thể thay thế phần này bằng API thực tế
        console.log("Mã OTP đã được gửi đến:", email);

        // Chuyển đến trang nhập mã OTP
        router.push('/Otp'); // Chuyển đến trang OTP
    };

    return (
        <div className="forgotPassword-wrapper">
            <div className="forgotPassword-container">
                <img src={'/images/trend.png'} alt="VJobs logo" style={{ width: 'auto', height: '40px', marginBottom: '20px' }} />
                <div style={{ marginLeft: '-330px', marginBottom: '10px' }}>
                    <h2 style={{ marginLeft: '-5px' }}>Đặt lại mật khẩu</h2>
                    <p style={{ marginLeft: '317px', fontSize: '13px' }}>Nhập địa chỉ email của bạn. Chúng tôi sẽ gửi mã OTP để bạn đặt lại mật khẩu.</p>
                </div>
                <form className="forgotPassword-form" onSubmit={handleSubmit}>
                    <div className="input-forgot">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Địa chỉ email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn-forgotPassword">Gửi</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;