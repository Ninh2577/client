"use client" // Đảm bảo sử dụng client component
import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import './ResetPassword.css';

const PageResetPassword = () => {
    const router = useRouter(); // Khởi tạo useRouter
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn chặn hành vi mặc định của form
        // Bạn có thể thêm logic để thay đổi mật khẩu ở đây
        console.log("Mật khẩu mới đã được đặt:", newPassword);

        // Sau khi đổi mật khẩu thành công, chuyển hướng về trang đăng nhập
        router.push('/dangnhap'); // Chuyển đến trang đăng nhập
    };

    return (
        <div className="ResetPassword-wrapper">
            <div className="ResetPassword-container">
                <h2 style={{ marginLeft: '-325px', fontFamily: '"Arial", "sans-serif"' }}>Đặt Lại Mật Khẩu</h2>
                <br />
                <form className="ResetPassword-form" onSubmit={handleSubmit}>
                    <div className="input-ResetPassword">
                        <label>Mật khẩu mới</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            value={newPassword} 
                            onChange={(e) => setNewPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="input-ResetPassword">
                        <label>Xác nhận mật khẩu mới</label>
                        <input 
                            type="password" 
                            placeholder="********" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <br />
                    <button type="submit" className="btn-ResetPassword">Đổi mật khẩu</button>
                </form>
            </div>
        </div>
    );
};

export default PageResetPassword;
