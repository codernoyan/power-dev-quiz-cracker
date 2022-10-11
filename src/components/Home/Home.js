import React from 'react';
import headerImage from '../../assets/hero-image.jpg';
import Quizzes from '../Quizzes/Quizzes';

const Home = () => {
    return (
        <div>
            {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="p-8 rounded shadow-xl sm:p-6">
                    <div className="flex flex-col items-center lg:flex-row">
                        <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
                            <img className='h-52' src={headerImage} alt="" />
                        </div>
                        <div className="lg:w-1/2">
                            <p className="mb-4 text-base text-gray-700">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                                perspiciatis unde omnis iste. Sed ut perspiciatis unde omnis iste
                                error sit voluptatem accusantium doloremque rem aperiam.
                            </p>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
                <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                        <img
                            src={headerImage}
                            alt=""
                            className="object-cover w-full lg:absolute h-80 lg:h-full"
                        />
                        <svg
                            className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
                            viewBox="0 0 20 104"
                            fill="currentColor"
                        >
                            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
                        </svg>
                    </div>
                    <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
                            Power Dev
                        </h5>
                        <p className="mb-5 text-gray-800">
                            <span className="font-bold">Lorem ipsum</span> dolor sit amet,
                            consectetur adipiscing elit. Etiam sem neque, molestie sit amet
                            venenatis et, dignissim ut erat. Sed aliquet velit id dui eleifend,
                            sed consequat odio sollicitudin.
                        </p>
                    </div>
                </div>
            </div>

            {/* quiz blogs */}
            <Quizzes></Quizzes>
        </div>
    );
};

export default Home;