import React, { useState } from 'react';
import './login.css';

const PageLogin = () => {
    return (
        <div className="login-wrapper">
            <div className="login-container">
                <img src={'./images/trend.png'} alt="VJobs logo"
                    style={{ marginLeft: '0px', width: 'auto', height: '40px', fontSize: '1.5rem', marginTop: '-20px', flexShrink: '0' }} />
                <h2>Đăng Nhập</h2>
                <form className="login-form">
                    <div className="input-login">
                        <label>Email</label>
                        <input type="email" placeholder="Địa chỉ email" />
                    </div>
                    <div className="input-login">
                        <label>Mật Khẩu</label>
                        <input type="password" placeholder="********" />
                    </div>
                    <a href="/forgotPassword" className="forgot-password">Quên mật khẩu?</a>
                    <br />
                    <div className="checkbox-login">
                        <input type="checkbox" className="remember" id="remember" />
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
                        Đăng nhập với Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PageLogin;




