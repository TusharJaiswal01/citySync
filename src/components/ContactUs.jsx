
// import React from 'react';
// // Update with the correct path to your video

// const ContactUs = () => {
//     return (
//         <div className="bg-[#0E0C15] text-white min-h-screen flex items-center">
//             <div className="container flex flex-col items-center">
//                 <h1 className="h1 text-[#CAC6DD] text-center mb-10">Contact Us</h1>
//                 <div className="flex flex-col lg:flex-row items-center w-full">
//                     <div className="lg:w-1/2 p-5 md:p-10 flex flex-col items-center justify-center">
//                         <form className="w-full max-w-lg">
//                             <div className="mb-6">
//                                 <label className="block text-[#ADA8C3] text-sm font-bold mb-2" htmlFor="name">
//                                     Name
//                                 </label>
//                                 <input
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="name"
//                                     type="text"
//                                     placeholder="Your name"
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label className="block text-[#ADA8C3] text-sm font-bold mb-2" htmlFor="email">
//                                     Email
//                                 </label>
//                                 <input
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="email"
//                                     type="email"
//                                     placeholder="Your email"
//                                 />
//                             </div>
//                             <div className="mb-6">
//                                 <label className="block text-[#ADA8C3] text-sm font-bold mb-2" htmlFor="message">
//                                     Message
//                                 </label>
//                                 <textarea
//                                     className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//                                     id="message"
//                                     placeholder="Your message"
//                                     rows="4"
//                                 ></textarea>
//                             </div>
//                             <div className="flex items-center justify-center">
//                                 <button
//                                     className="bg-[#1A1A32] hover:bg-[#2D2D44] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//                                     type="button"
//                                 >
//                                     Submit
//                                 </button>
//                             </div>
//                         </form>
//                     </div>
//                     <div className="lg:w-1/2 p-5 md:p-10">
//                         <video className="w-full rounded-lg" autoPlay loop muted>
//                             <source src="" type="video/mp4" />
//                         </video>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactUs;
// ContactUs.js
// ContactUs.js
// ContactUs.js
// ContactUs.js

// ContactUs.js
// ContactUs.js
import React from 'react';

export default function ContactUs() {
    return (
        <div className="bg-[#0E0C15] text-white min-h-screen flex items-center">
            <div className="container mx-auto flex flex-col items-center">
                <h1 className="text-4xl lg:text-6xl text-[#CAC6DD] text-center mb-5 lg:mb-10">Contact Us</h1>
                <div className="lg:flex lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
                    <div className="lg:w-1/2 w-full lg:h-[500px] rounded-[10px] shadow-[16px_16px_20px_#0000008c] overflow-hidden lg:mb-0 mb-10">
                        <div className='bg-[#1c1c1c] px-6 py-10 space-y-4 mt-16 mr-20'>
                            <form className=''>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-purple-600 font-semibold mb-2">Name</label>
                                    <input type="text" id="name" name="name" className="w-full border border-violet-700 rounded-md py-2 px-4 focus:outline-none focus:border-purple-400" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-purple-600 font-semibold mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full border border-violet-700 rounded-md py-2 px-4 focus:outline-none focus:border-purple-400" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-purple-600 font-semibold mb-2">Message</label>
                                    <textarea id="message" name="message" className="w-full border border-violet-700 rounded-md py-5 px-3 focus:outline-none focus:border-purple-400"></textarea>
                                </div>
                                <div>
                                    <button type="submit" className="bg-purple-400 text-white px-4 py-2 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600 ring-2 ring-pink-500 ring-inset">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 max-w-[600px] mx-auto lg:mx-0">
                        <img className="h-auto w-full lg:w-auto mt-14" src="contact.jpg" alt="contact" />
                    </div>
                </div>
            </div>
        </div>
    )
}