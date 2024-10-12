import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Question from './Question';

const data = [
    {
        question: "What problem does Base (as a Layer 2 solution) help solve?",
        options: ["It makes websites look prettier", "It helps with slow and expensive transactions on Ethereum", "It creates new cryptocurrencies", "It replaces traditional banking"],
        answer: "It helps with slow and expensive transactions on Ethereum",
    }
]

const QuizTwo = () => {
  const navigate = useNavigate();
  const [showNextButton, setShowNextButton] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleClick = (route) => {
    navigate(route);
  }

  const handleAnswer = (selectedOption) => {
    if (selectedOption === data[currentQuestion].answer) {
      setScore(score + 1);
    }
    setShowNextButton(true); // Show the next button after answering
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
    setShowNextButton(true); // Hide the next button after moving to the next question
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
        <div className="bg-bgBar rounded-md shadow-box w-4/5 max-w-md h-96">
          <div className="text-center p-4">
            <h1>Base Quiz 2</h1>
          </div>
          <div className="flex justify-center items-center">

          </div>
          <div className="flex flex-col">
          <Question
        question={data[currentQuestion].question}
        options={data[currentQuestion].options}
        onAnswer={handleAnswer}
        onNext={handleNext}
        showNextButton={showNextButton}
      />
          </div>
        </div>
        <div className="p-10 space-x-32">
          <button onClick={() => handleClick('/moduletwo')} className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton">Back</button>
          <button onClick={() => handleClick('/moduleide')} className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton">Next</button>
        </div>
    </div>
  )
}

export default QuizTwo