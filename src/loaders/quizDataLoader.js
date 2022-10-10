import axios from "axios";

export const quizDataLoader = async () => {
    try {
        const quizData = await axios.get('https://openapi.programming-hero.com/api/quiz');
        return quizData.data.data;
    } catch (error) {
        console.log(error);
    }
}