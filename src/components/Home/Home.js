import React from 'react';
import headerImage from '../../assets/hero-image.jpg';
import Quizes from '../Quizzes/Quizzes';

const Home = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
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
                            <a
                                href="/"
                                aria-label=""
                                className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                            >
                                Learn more
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* quiz blogs */}
            <Quizes></Quizes>
        </div>
    );
};

export default Home;