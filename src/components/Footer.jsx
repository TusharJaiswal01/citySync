// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";

// // Dummy data
// const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
// const Resources = [
//   "Articles",
//   "Blog",
//   "Chart Sheet",
//   "Code challenges",
//   "Docs",
//   "Projects",
//   "Videos",
//   "Workspaces",
// ];
// const Plans = ["Paid memberships", "For students", "Business solutions"];
// const Community = ["Forums", "Chapters", "Events"];

// const Footer = () => {
//   return (
//     <div className="bg-richblack-800">
//       <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
//         <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
//           {/* Left Side Section */}
//           <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
//             <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
//               <img
//                 src="/logo.png"
//                 alt=""
//                 className="object-contain"
//               />
//               <h1 className="text-richblack-50 font-semibold text-[16px]">
//                 Company
//               </h1>
//               <div className="flex flex-col gap-2">
//                 {["About", "Careers", "Affiliates"].map((ele, i) => {
//                   return (
//                     <div
//                       key={i}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.toLowerCase()}>{ele}</Link>
//                     </div>
//                   );
//                 })}
//               </div>
//               <div className="flex gap-3 text-lg">
//                 <FaFacebook />
//                 <FaGoogle />
//                 <FaTwitter />
//                 <FaYoutube />
//               </div>
//               <div></div>
//             </div>

//             <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
//               <h1 className="text-richblack-50 font-semibold text-[16px]">
//                 Resources
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {Resources.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>

//               <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
//                 Support
//               </h1>
//               <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
//                 <Link to={"/help-center"}>Help Center</Link>
//               </div>
//             </div>

//             <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
//               <h1 className="text-richblack-50 font-semibold text-[16px]">
//                 Plans
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {Plans.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>
//               <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
//                 Community
//               </h1>

//               <div className="flex flex-col gap-2 mt-2">
//                 {Community.map((ele, index) => {
//                   return (
//                     <div
//                       key={index}
//                       className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     >
//                       <Link to={ele.split(" ").join("-").toLowerCase()}>
//                         {ele}
//                       </Link>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* Right Side Section */}
//           <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
//             {/* Additional Content Goes Here */}
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
//         {/* Bottom Footer Section */}
//         <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
//           <div className="flex flex-row">
//             {BottomFooter.map((ele, i) => {
//               return (
//                 <div
//                   key={i}
//                   className={` ${BottomFooter.length - 1 === i
//                     ? ""
//                     : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
//                     } px-3 `}
//                 >
//                   <Link to={ele.split(" ").join("-").toLocaleLowerCase()}>
//                     {ele}
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>

//           <div className="text-center">Made with ❤ </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;
import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0e091f] py-6 lg:py-24 border-t-absolute inset-0">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between mb-8 lg:mb-0">
          <div className="footer-section mb-6 lg:mb-0">
            <img className="h-16 lg:h-[150px] w-full lg:w-[400px]" src='logo222.png' alt="Logo" />
          </div>

          {/* Links Sections */}
          <div className="flex flex-col lg:flex-row lg:space-x-32 space-y-6 lg:space-y-0">
            {/* Social Media Links */}
            <div className="footer-section">
              <h4 className="text-white font-semibold mb-4">Social Media</h4>
              <ul className="text-white space-y-4">
                <li className='flex items-center space-x-2'><img src="https://cdn-icons-png.flaticon.com/128/270/270798.png" height={"20px"} width={"25px"} alt="Github" /><a href="#">Github</a></li>
                <li className='flex items-center space-x-2'><img src='https://cdn-icons-png.flaticon.com/128/15059/15059911.png' height={"20px"} width={"25px"} alt="Stack Overflow" /><a href="#">Stack Overflow</a></li>
                <li className='flex items-center space-x-2'><img src='https://cdn-icons-png.flaticon.com/128/2504/2504923.png' height={"20px"} width={"25px"} alt="LinkedIn" /><a href="#">LinkedIn</a></li>
                <li className='flex items-center space-x-2'><img src='https://cdn-icons-png.flaticon.com/128/3670/3670209.png' height={"20px"} width={"25px"} alt="YouTube" /><a href="#">YouTube</a></li>
                <li className='flex items-center space-x-2'><img src='https://cdn-icons-png.flaticon.com/128/3256/3256013.png' height={"20px"} width={"25px"} alt="Twitter" /><a href="#">Twitter</a></li>
                <li className='flex items-center space-x-2'><img src='https://cdn-icons-png.flaticon.com/128/2504/2504946.png' height={"20px"} width={"25px"} alt="Twitch" /><a href="#">Twitch</a></li>
                <li className='flex items-center space-x-2'><img src='https://cdn-icons-png.flaticon.com/128/733/733547.png' height={"20px"} width={"25px"} alt="Facebook" /><a href="#">Facebook</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div className="footer-section">
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="text-white space-y-4">
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Customer Support</a></li>
                <li><a href="#">Connect4All Status</a></li>
                <li><a href="#">Manage Cookies</a></li>
              </ul>
            </div>

            {/* About Links */}
            <div className="footer-section">
              <h3 className="text-white font-semibold mb-4">About</h3>
              <ul className="text-white space-y-4">
                <li><a href="#">Careers</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Legal Notices</a></li>
                <li><a href="#">Privacy Notices</a></li>
                <li><a href="#">Security Information</a></li>
                <li><a href="#">Trust Center</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
