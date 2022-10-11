import React, { useContext } from 'react';
import { QuizContext } from '../../layouts/Root';
import Quiz from '../Quiz/Quiz';

const Quizzes = () => {
    const quizData = useContext(QuizContext);
    // console.log(quizData)
    return (
        <section className="py-6 sm:py-2">
            <div className="container p-6 mx-auto space-y-8">
                {/* <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Quiz Topics</h2>
                </div> */}
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    {
                        quizData.map(quiz => <Quiz
                            key={quiz.id}
                            quiz={quiz}
                        ></Quiz>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Quizzes;