"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Sử dụng next/navigation cho App Router
import './otp.css';

const Otp = () => {
    const router = useRouter(); // Khởi tạo useRouter
    const [otp, setOtp] = useState(''); // Khởi tạo state cho OTP

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form

        console.log("Mã OTP đã được nhập:", otp);

        // Chuyển đến trang đổi mật khẩu
        router.push('/ResetPassword'); // Chuyển đến trang ResetPassword
    };

    return (
        <div className="Otp-wrapper">
            <div className="Otp-container">
                <h2 style={{ marginLeft: '-362px', marginTop: '10px' }}>Nhập mã OTP</h2>
                <p style={{ marginLeft: '-208px', marginTop: '10px', fontSize: '13px' }}>Nhập mã OTP đã gửi đến địa chỉ email của bạn.</p>
                <br />
                <form className="Otp-form" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>Mã OTP</label>
                        <input
                            type="text"
                            placeholder="Mã otp"
                            value={otp}
                            onChange={(e) => setOtp(e.target.value)}
                            required
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn-Otp">Xác nhận</button> {/* Thay đổi từ <a> sang <button> */}
                </form>
            </div>
        </div>
    );
};

export default Otp;
