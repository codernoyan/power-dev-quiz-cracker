import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Answer = ({ answer }) => {
    const handleTest = () => {
        toast.success('success', {autoClose: 500})
    }
    return (
        <div onClick={handleTest} className='border-2 p-4 bg-sky-100 w-full rounded-md cursor-pointer'>
            <p className='font-medium'>{answer}</p>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Answer;