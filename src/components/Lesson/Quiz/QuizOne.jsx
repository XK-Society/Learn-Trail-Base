import React from 'react'
import { useNavigate } from 'react-router-dom';

const Quiz = [
    {
        id: 1,
        question: 'Which of the following is a key feature of Solana?',
        options: ['High transaction fees', 'Low transaction costs', 'Slow processing'],
        correctAnswer: 1,
    }
]

const QuizOne = () => {
  const navigate = useNavigate();

  const handleClick = (route) => {
    navigate(route);
  }

  return (
    <div className="flex flex-col justify-center items-center pt-10">
        <div className="bg-bgBar rounded-md shadow-box w-4/5 max-w-md h-96">
          <div className="text-center p-4">
            <h1>Base Quiz 1</h1>
          </div>
          <div className="flex justify-center items-center">

          </div>
          <div className="flex flex-col space-y-2">
            {Quiz.map((quiz, index) => (
            <>
            <p>{quiz.question}</p>
            <button
                    key={quiz.id}
                    className="px-4 py-2 rounded-md bg-bgButton"
                >
                    {quiz.options}
                </button>
                </>
            ))}
          </div>
        </div>
        <div className="p-10 space-x-32">
          <button onClick={() => handleClick('/moduleone')} className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton">Back</button>
          <button onClick={() => handleClick('/moduletwo')} className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton">Next</button>
        </div>
    </div>
  )
}

export default QuizOne