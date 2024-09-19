import React from 'react';

const AboutUs = () => {
    return (
        <div className="bg-[#0E0C15] text-white min-h-screen flex items-center">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Heading */}
                <h1 className="text-4xl lg:text-6xl text-[#CAC6DD] text-center lg:mb-3">About CitySync</h1>

                {/* Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                    {/* Left Side: Content */}
                    <div className="lg:pr-6">
                        <p className="text-sm md:text-base lg:text-lg text-[#e6e4f1] mb-4 border-b border-[#CAC6DD] pb-4">
                            Welcome to our platform, where AI-driven project planning and cost predictions empower urban governance. Our tools offer precise insights, helping departments plan efficiently and avoid delays or budget overruns.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-[#e6e4f1] mb-4 border-b border-[#CAC6DD] pb-4">
                            Our real-time collaboration dashboard streamlines inter-departmental coordination, reduces conflicts, and optimizes resources through GIS-based geo-spatial mapping. The public feedback forum allows citizens and departments to raise concerns directly to the CMO, ensuring transparency.
                        </p>
                        <p className="text-sm md:text-base lg:text-lg text-[#e6e4f1]">
                            We prioritize sustainability and financial oversight with an expense tracker and sustainability reports that monitor costs and ensure projects meet environmental goals, driving more efficient urban development.
                        </p>
                    </div>

                    {/* Right Side: Image */}
                    <div className="relative rounded-lg shadow-lg overflow-hidden border border-[#CAC6DD] h-2/4">
                        <img
                            src='https://images.pexels.com/photos/1123972/pexels-photo-1123972.jpeg?auto=compress&cs=tinysrgb&w=600'
                            alt="About CitySync"
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
