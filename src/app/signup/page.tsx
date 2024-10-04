// import React, { FC } from "react";
// import facebookSvg from "@/images/Facebook.svg";
// import twitterSvg from "@/images/Twitter.svg";
// import googleSvg from "@/images/Google.svg";
// import Input from "@/shared/Input";
// import ButtonPrimary from "@/shared/ButtonPrimary";
// import Image from "next/image";
// import Link from "next/link";

// export interface PageSignUpProps {}

// const loginSocials = [
//   {
//     name: "Continue with Facebook",
//     href: "#",
//     icon: facebookSvg,
//   },
//   {
//     name: "Continue with Twitter",
//     href: "#",
//     icon: twitterSvg,
//   },
//   {
//     name: "Continue with Google",
//     href: "#",
//     icon: googleSvg,
//   },
// ];

// const PageSignUp: FC<PageSignUpProps> = ({}) => {
//   return (
//     <div className={`nc-PageSignUp  `}>
//       <div className="container mb-24 lg:mb-32">
//         <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
//           Signup
//         </h2>
//         <div className="max-w-md mx-auto space-y-6 ">
//           <div className="grid gap-3">
//             {loginSocials.map((item, index) => (
//               <a
//                 key={index}
//                 href={item.href}
//                 className="nc-will-change-transform flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
//               >
//                 <Image
//                   className="flex-shrink-0"
//                   src={item.icon}
//                   alt={item.name}
//                 />
//                 <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
//                   {item.name}
//                 </h3>
//               </a>
//             ))}
//           </div>
//           {/* OR */}
//           <div className="relative text-center">
//             <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
//               OR
//             </span>
//             <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100 dark:border-neutral-800"></div>
//           </div>
//           {/* FORM */}
//           <form className="grid grid-cols-1 gap-6" action="#" method="post">
//             <label className="block">
//               <span className="text-neutral-800 dark:text-neutral-200">
//                 Email address
//               </span>
//               <Input
//                 type="email"
//                 placeholder="example@example.com"
//                 className="mt-1"
//               />
//             </label>
//             <label className="block">
//               <span className="flex justify-between items-center text-neutral-800 dark:text-neutral-200">
//                 Password
//               </span>
//               <Input type="password" className="mt-1" />
//             </label>
//             <ButtonPrimary type="submit">Continue</ButtonPrimary>
//           </form>

//           {/* ==== */}
//           <span className="block text-center text-neutral-700 dark:text-neutral-300">
//             Already have an account? {` `}
//             <Link href="/login" className="font-semibold underline">
//               Sign in
//             </Link>
//           </span>
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
          style={{
            marginLeft: '0px', width: 'auto', height: '40px', fontSize: '1.5rem',
            marginTop: '-20px', flexShrink: '0'
          }} />
        <h2>Đăng Ký</h2>
        <br/>
        <form className="register-form">
          <div className='row'>
            <div className='col-6'>
              <div className="input-groups">
                <label>Họ tên</label>
                <input type="text" placeholder="Họ và tên" />
              </div>
              <div className="input-groups">
                <label>Email</label>
                <input type="email" placeholder="Địa chỉ email" />
              </div>
              <div className="input-groups">
                <label>Mật khẩu</label>
                <input type="password" placeholder="********" />
              </div>
              <div className="input-groups">
                <label>SĐT</label>
                <input type="text" placeholder="Số điện thoại" />
              </div>

            </div>
            <div className='col-7'>
              <div className="input-groups">
                <label>Địa chỉ</label>
                <input type="text" placeholder="Địc chỉ" />
              </div>
              <div className="input-groups">
                <label>Năm sinh</label>
                <input type="date" placeholder="năm sinh" />
              </div>
              <div className='rolessss'>
                <label>Giới tính</label>
                <br />
                {/* <div className='cheks'>
                  <input type='radio' checked name='roles' id='roles' />
                  <span >Nam</span>
                  <input type='radio' name='roles' id='roles' />
                  <span>Nữ</span>
                </div> */}
                <RadioGroup/>
              </div>
            </div>
          </div>

          <br />
          <div className="checkbox-groups">
            <input type="checkbox" className="remembers" id="remember" />
            <label htmlFor="remember">Tôi muốn đăng ký nhận thông báo qua email.</label>
          </div>
          <button type="submit" className="btn-register">Đăng ký</button>
        </form>
        <div className="signup-groups">
          Đã có tài khoản? <a href="/login">Đăng nhập</a>
        </div>
        <div className="separator">hoặc</div>
        <div className="social-register">
          <button className="btn-google">
            <img src={'./images/icons8-google-48.png'} alt="Google Icon"
              style={{ width: '25px', marginRight: '8px' }} />
            Đăng ký với Google
          </button>
          <br />
          <button style={{ marginTop: '-3px' }} className="btn-facebook">
            <img src={'./images/icons8-facebook-48.png'} alt="Facebook Icon"
              style={{ width: '25px', marginRight: '8px' }} />
            Đăng ký với Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageSignUp;

