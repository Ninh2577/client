import React, { useState } from 'react';
import './Register.css';

const Register = () => {

    return (
        <div className="register-wrapper">
            <div className="register-container">
                <img src={require('../assets/images/trend.png')} alt="VJobs logo"
                    style={{
                        marginLeft: '-560px', width: 'auto', height: '40px', fontSize: '1.5rem',
                        marginTop: '-20px', flexShrink: '0'
                    }} />
                <h2>Đăng Ký</h2>
                <form className="register-form">
                    <div className='row'>
                        <div className='col-6'>
                            <div className="input-group">
                                <label>Họ tên</label>
                                <input type="text" placeholder="Họ và tên" />
                            </div>
                            <div className="input-group">
                                <label>Email</label>
                                <input type="email" placeholder="Địa chỉ email" />
                            </div>
                            <div className="input-group">
                                <label>Mật khẩu</label>
                                <input type="password" placeholder="********" />
                            </div>
                            <div className="input-group">
                                <label>SĐT</label>
                                <input type="text" placeholder="Số điện thoại" />
                            </div>

                        </div>
                        <div className='col-7'>
                            <div className="input-group">
                                <label>Địa chỉ</label>
                                <input type="text" placeholder="Địc chỉ" />
                            </div>
                            <div className="input-group">
                                <label>Năm sinh</label>
                                <input type="date" placeholder="năm sinh" />
                            </div>
                            <div className='rolessss'>
                                <label>Giới tính</label>
                                <br />
                                <div className='cheks'>
                                    <input type='radio' checked name='roles'id='roles'/>
                                    <span >Nam</span>
                                    <input type='radio' name='roles'id='roles'/>
                                    <span>Nữ</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="checkbox-group">
                        <input type="checkbox" className="remember" id="remember" />
                        <label htmlFor="remember">Tôi muốn đăng ký nhận thông báo qua email.</label>
                    </div>
                    <button type="submit" className="btn-register">Đăng ký</button>
                </form>
                <div className="signup-prompt">
                    Đã có tài khoản? <a href="/login">Đăng nhập</a>
                </div>
                <div className="separator">hoặc</div>
                <div className="social-register">
                    <button className="btn-google">
                        <img src={require('../assets/images/icons8-google-48.png')} alt="Google Icon"
                            style={{ width: '25px', marginRight: '8px' }} />
                        Đăng ký với Google
                    </button>
                    <br />
                    <button style={{ marginTop: '-3px' }} className="btn-facebook">
                        <img src={require('../assets/images/icons8-facebook-48.png')} alt="Facebook Icon"
                            style={{ width: '25px', marginRight: '8px' }} />
                        Đăng ký với Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
