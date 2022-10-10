import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ quiz }) => {
    const { logo, name, total } = quiz;
    return (
        <article className="flex flex-col shadow-md">
            <div>
                <img alt="" className="object-cover w-full h-52 dark:bg-gray-100" src={logo} />
            </div>
            <div className="flex flex-col flex-1 p-6">
                <Link rel="noopener noreferrer" to="/" aria-label="Te nulla oportere reprimique his dolorum"></Link>
                <button className="text-xs tracking-wider uppercase font-bold bg-sky-400 text-white px-4 py-2">Give a Test</button>
                <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{name}</h3>
                <div className="flex flex-wrap justify-center pt-3 space-x-2 text-xs dark:text-gray-400">
                    <span>Total Quizzes: {total}</span>
                    {/* <span>2.1K views</span> */}
                </div>
            </div>
        </article>
    );
};

export default Quiz;