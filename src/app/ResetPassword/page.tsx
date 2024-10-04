
import React, { useState } from 'react';
import './ResetPassword.css';

const PageResetPassword = () => {
    return (
        <div className="ResetPassword-wrapper">
            <div className="ResetPassword-container">
                <img src={'../images/trend.png'} alt="VJobs logo"
                    style={{ marginLeft: '-0px', width: 'auto', height: '40px', fontSize: '1.5rem', marginTop: '-20px', flexShrink: '0' }} />
                <h2 style={{marginLeft: '-325px',fontFamily: '"Arial", "sans-serif"'}}>Đặt Lại Mật Khẩu</h2>
                <br />
                <form className="ResetPassword-form">
                    <div className="input-ResetPassword">
                        <label>Mật khẩu mới</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <div className="input-ResetPassword">
                        <label>xát nhận mật khẩu mới</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <br />
                    <button type="submit" className="btn-ResetPassword">Đổi mật khẩu</button>
                </form>
            </div>
        </div>
    );
};

export default PageResetPassword;