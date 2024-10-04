import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
    return (
        <div className="forgotPassword-wrapper">
            <div className="forgotPassword-container">
                <img src={'./images/trend.png'} alt="VJobs logo"
                    style={{ marginLeft: '-450px', width: 'auto', height: '40px', fontSize: '1.5rem', marginTop: '-20px', flexShrink: '0' }} />
                <h2 style={{ marginLeft: '-309px' }}>Đặt lại mật khẩu</h2>
                <p style={{ marginLeft: '-5px',marginBottom: '8px' }}>Nhập địa chỉ email của tài khoản và chúng tôi sẽ gửi cho bạn mã OTP</p>
                <p style={{ marginLeft: '-353px', marginTop: '-5px' }}> để đặt lại mật khẩu.</p>
                <br/>
                <form className="forgotPassword-form">
                    <div className="input-forgot">
                        <label>Email </label>
                        <input type="text" placeholder="Địa chỉ email" />
                    </div>
                    <br />
                    <button type="submit" className="btn-forgotPassword">Gửi</button>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;