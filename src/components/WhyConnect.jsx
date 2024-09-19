
import React from 'react';
import "../assets/whyCone.jpg";

function WhyConnect() {
    return (

        <>
            <h1 className='text-center mb-6 text-6xl'>Why Connect4ALL</h1>
            <div className="mx-20">


                {/* First Section */}
                <div className='flex justify-between items-center mb-8'> {/* Reduced margin-bottom */}
                    <div className="w-1/2 pr-8 ml-28">
                        <h1 className='flex items-center justify-center text-4xl'>All in One Collaboration </h1>

                        <div className='mt-8 text-justify'>


                            Connect4All is a comprehensive platform designed to streamline coding and collaboration. It integrates coding tools, video calls, and chat functionalities to enhance professional interaction and project management. Additionally, Connect4All offers resources to learn coding, making it an all-in-one solution for developers. Whether you're working on a team project or honing your coding skills, Connect4All provides the tools and support needed to succeed in the tech world.
                        </div>
                    </div>
                    <div className='w-1/2 mr-28'>
                        <img className='mx-auto h-auto w-96' src='/WhyConn1.jpg' alt='' />
                    </div>
                </div>

                {/* Second Section */}
                <div className='flex justify-between items-center mb-8'>
                    <div className='w-1/2'>
                        <img className='mx-auto h-auto w-96' src='/WhyConn3.jpg' alt='' />
                    </div>
                    <div className="w-1/2 pl-8">
                        <h1 className='flex items-center justify-center text-4xl'>Self Sufficient </h1>
                        <div className='mt-8 text-justify'>
                            Connect4All is a platform designed to address the gaps in modern collaboration tools. While other platforms may lack in tech collaboration, educational resources, or video call and chat capabilities, Connect4All seamlessly integrates all these features. It ensures a comprehensive and cohesive experience for users, enabling coding, learning, and professional interaction in one place. With Connect4All, you have all the tools needed for effective collaboration and project management.
                        </div>

                    </div>
                </div>

                {/* Third Section */}
                <div className='flex justify-between items-center mb-8'> {/* Reduced margin-bottom */}
                    <div className="w-1/2 ml-28">
                        <h1 className='flex items-center justify-center text-4xl'>AI Support </h1>
                        <div className='mt-8 text-justify'>
                            Connect4All enhances your experience with advanced AI integration, featuring an AI chatbot that eliminates the need to switch between different AI platforms or search engines. Additionally, it offers AI-powered code suggestions to streamline your coding process. This innovative approach not only saves time but also boosts productivity, making Connect4All a cutting-edge solution for developers seeking a seamless, efficient, and intelligent collaboration environment.
                        </div>
                    </div>
                    <div className='w-1/2 pl-8 mr-28'>
                        <img className='mx-auto h-auto w-96' src='/WhyConn2.jpg' alt='' />
                    </div>
                </div>
            </div>
        </>
    );
}

export default WhyConnect;