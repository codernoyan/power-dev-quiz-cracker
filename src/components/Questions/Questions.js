import React from 'react';
import Answer from '../Answer/Answer';

const Questions = ({ question }) => {
    console.log(question)
    const { options, id, index, correctAnswer } = question;

    return (
        <div>
            <div className='p-4 bg-slate-50 shadow-md mb-4'>
                <div className='mb-4'>
                    <h4 className='text-xl font-bold'>{question.question}</h4>
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