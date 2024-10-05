import React, { useState } from 'react';
import './otp.css';


const otp = () => {

    return (
        <div className="Otp-wrapper">
            <div className="Otp-container">
                <img src={'./images/trend.png'} alt="VJobs logo"
                    style={{ marginLeft: '-0px', width: 'auto', height: '40px', fontSize: '1.5rem', marginTop: '-20px', flexShrink: '0' }} />
                <h2 style={{marginLeft: '-362px',marginTop:'10px'}}>Nhập mã OTP</h2>
                <p style={{marginLeft: '-208px',marginTop: '10px',fontSize:'13px'}}>Nhập mã OTP đã gửi đến địa chỉ email của bạn.</p>
                <br/>
                <form className="Otp-form">
                    <div className="input-group">
                        <label>Mã OTP </label>
                        <input type="text" placeholder="Mã otp" />
                    </div>
                    <br />
                    <a href='/ResetPassword' type="submit" className="btn-Otp">Xát nhận</a>
                </form>
            </div>
        </div>
    );
};

export default otp;




