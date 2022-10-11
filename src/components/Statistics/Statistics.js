import React, { useContext } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { QuizContext } from '../../layouts/Root';

const Statistics = () => {
    const quizData = useContext(QuizContext);
    console.log(quizData)
    return (
        <div className='my-4'>
            <div>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Quiz Statistics</h2>
            </div>
            <div className='flex justify-center'>
                <ResponsiveContainer width="65%" height={450} >
                    <BarChart data={quizData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Statistics;