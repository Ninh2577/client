import React, { useState } from 'react';
import './ChangePassword.css';

const PageChangePassword = () => {
    return (
        <div className="changePassword-wrapper">
            <div className="changePassword-container">
                <img src={'./images/trend.png'} alt="VJobs logo"
                    style={{ marginLeft: '0px', width: 'auto', height: '40px', fontSize: '1.5rem', marginTop: '-20px', flexShrink: '0' }} />
                <h2 style={{marginLeft: '-367px',marginTop: '10px',fontFamily: '"Arial", "sans-serif"'}}>Đổi Mật Khẩu</h2>
                <br />
                <form className="changePassword-form">
                    <div className="input-groups">
                        <label>Mật khẩu hiện tại </label>
                        <input type="password" placeholder="********" />
                    </div>
                    <div className="input-groups">
                        <label>Mật khẩu mới</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <div className="input-groups">
                        <label>xát nhận mật khẩu mới</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <br />
                    <button type="submit" className="btn-changePassword">Đổi mật khẩu</button>
                </form>
            </div>
        </div>
    );
};

export default PageChangePassword;