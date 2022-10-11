import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = ({ answer, correctAnswer }) => {
    const handleTest = () => {
        if (answer === correctAnswer) {
            toast.success('Wow Correct Answer!!', {autoClose: 700, position: "top-center",})            
        } else {
            toast.error('Wrong Answer!!', {autoClose: 700, position: "top-center",})
        }
    }
    return (
        <div onClick={handleTest} className='border-2 p-4 bg-sky-100 w-full rounded-md cursor-pointer'>
            <p className='font-medium'>{answer}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Answer;