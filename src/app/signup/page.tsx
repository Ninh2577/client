// import React, { useState } from 'react';
// import './signup.css';
// import RadioGroup from '@/components/radio';

// const PageSignUp = () => {
//   return (
//     <div className="register-wrapper">
//       <div className="register-container">
//         <img src={'./images/trend.png'} alt="VJobs logo"
//           style={{
//             marginLeft: '0px', width: 'auto', height: '40px', fontSize: '1.5rem',
//             marginTop: '-20px', flexShrink: '0'
//           }} />
//         <h2>Đăng Ký</h2>
//         <br/>
//         <form className="register-form">
//           <div className='row'>
//             <div className='col-6'>
//               <div className="input-register">
//                 <label>Họ tên</label>
//                 <input type="text" placeholder="Họ và tên" />
//               </div>
//               <div className="input-register">
//                 <label>Email</label>
//                 <input type="email" placeholder="Địa chỉ email" />
//               </div>
//               <div className="input-register">
//                 <label>Mật khẩu</label>
//                 <input type="password" placeholder="********" />
//               </div>
//               <div className="input-register">
//                 <label>SĐT</label>
//                 <input type="text" placeholder="Số điện thoại" />
//               </div>

//             </div>
//             <div className='col-7'>
//               <div className="input-register">
//                 <label>Địa chỉ</label>
//                 <input type="text" placeholder="Địc chỉ" />
//               </div>
//               <div className="input-register">
//                 <label>Năm sinh</label>
//                 <input type="date" placeholder="năm sinh" />
//               </div>
//               <div className='rolessss'>
//                 <label>Giới tính</label>
//                 <br />
//                 <RadioGroup/>
//               </div>
//             </div>
//           </div>

//           <br />
//           <div className="checkbox-register">
//             <input type="checkbox" className="remembers" id="remember" />
//             <label htmlFor="remember">Tôi muốn đăng ký nhận thông báo qua email.</label>
//           </div>
//           <button type="submit" className="btn-register">Đăng ký</button>
//         </form>
//         <div className="signup-register">
//           Đã có tài khoản? <a href="/login">Đăng nhập</a>
//         </div>
//         <div className="separator">hoặc</div>
//         <div className="social-register">
//           <button className="btn-google">
//             <img src={'./images/icons8-google-48.png'} alt="Google Icon"
//               style={{ width: '25px', marginRight: '8px' }} />
//             Đăng ký với Google
//           </button>
//           <br />
//           <button style={{ marginTop: '-3px' }} className="btn-facebook">
//             <img src={'./images/icons8-facebook-48.png'} alt="Facebook Icon"
//               style={{ width: '25px', marginRight: '8px' }} />
//             Đăng ký với Facebook
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PageSignUp;

import React, { useState } from 'react';
import './signup.css';
import RadioGroup from '@/components/radio';


const PageSignUp = () => {
  return (
    <div className="register-wrapper">
      <div className="register-container">
        <img src={'./images/trend.png'} alt="VJobs logo"
          style={{ marginLeft: '0px', width: 'auto', height: '40px', fontSize: '1.5rem', marginTop: '-20px', flexShrink: '0' }} />
        <h2>Đăng Ký</h2>
        <form className="login-form">
          <div className="input-register">
            <label>Họ Tên</label>
            <input type="email" placeholder="Họ và tên" />
          </div>
          <div className="input-register">
            <label>Email</label>
            <input type="email" placeholder="Địa chỉ email" />
          </div>
          <div className="input-register">
            <label>Mật Khẩu</label>
            <input type="password" placeholder="********" />
          </div>
          <div className="input-register">
            <label>SĐT</label>
            <input type="password" placeholder="Số điện thoại" />
          </div>
          <div className="input-register">
            <label>Địa chỉ</label>
            <input type="text" placeholder="địa chỉ" />
          </div>
          <div className="input-register">
            <label>Năm sinh</label>
            <input type="text" placeholder="Năm sinh" />
          </div>
          <div className='rolessss' style={{ marginLeft: '-356px' }}>
            <label>Giới tính</label>
            <br />
            <RadioGroup />
          </div>
          <br/>
          <br />
          <div className="checkbox-register">
            <input type="checkbox" className="remember" id="remember" />
            <label htmlFor="remember">Tôi muốn đăng ký nhận thông báo qua email.</label>
          </div>
          <button type="submit" className="btn-register">Đăng ký</button>
        </form>
        <div className="signup-prompts">
          Đã có tài khoản? <a href="/login">Đăng nhập</a>
        </div>
        <div className="separator">hoặc</div>
        <div className="social-register">
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

export default PageSignUp;






