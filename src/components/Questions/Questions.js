import React from 'react';
import Answer from '../Answer/Answer';

const Questions = ({ question, index }) => {
    console.log(question)
    const { options, correctAnswer } = question;

    return (
        <div>
            <div className='p-4 bg-slate-50 shadow-md mb-4'>
                <div className='flex justify-end items-center'>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </button>
                </div>
                <div className='mb-4'>
                    {/* <h4 className='text-xl font-bold'>{`Quiz no.${index + 1} ${question.question}`}</h4> */}
                    <h4 className='text-xl font-bold'>Quiz no.{index + 1} <span>{question.question}</span></h4>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {
                        options.map((answer, index) => <Answer key={index} answer={answer}
                            correctAnswer={correctAnswer}></Answer>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Questions;