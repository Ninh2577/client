// "use client"
import React, { useState } from 'react';
import './ForgotPassword.css';


const ForgotPassword = () => {
    return (
        <div className="forgotPassword-wrapper">
            <div className="forgotPassword-container">
                <img src={'./images/trend.png'} alt="VJobs logo"
                    style={{ marginLeft: '-0px', width: 'auto', height: '40px', fontSize: '1.5rem', marginTop: '-20px', flexShrink: '0' }} />
                <div style={{ marginLeft: '-330px', marginBottom: '10px' }}>
                    <h2 style={{ marginLeft: '-5px' }}>Đặt lại mật khẩu</h2>
                    <p style={{ marginLeft: '317px', fontSize: '13px' }}>Nhập địa chỉ email của bạn. Chúng tôi sẽ gửi mã OTP để bạn đặt lại mật khẩu.</p>
                </div>
                <form className="forgotPassword-form" >
                    <div className="input-forgot">
                        <label>Email </label>
                        <input type="text" placeholder="Địa chỉ email" />
                    </div>
                    <br />
                    <a href='/Otp' type="submit" className="btn-forgotPassword">Gửi</a>
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;