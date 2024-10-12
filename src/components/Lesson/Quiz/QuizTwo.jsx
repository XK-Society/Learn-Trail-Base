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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option
  const [showNextButton, setShowNextButton] = useState(false); // Hide next button until correct answer
  const [showResult, setShowResult] = useState(false); // Track when the user checks their answer

  const handleClick = (route) => {
    navigate(route);
  };

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption); // Update the selected option when clicked
    if (selectedOption === data[currentQuestion].answer) {
      setShowNextButton(true); // Show next button if the answer is correct
    }
  };

  const handleCheck = () => {
    setShowResult(true); // Show the result after checking the answer
    setShowNextButton(true); // Allow moving to the next question after checking
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="bg-bgBar rounded-md shadow-box w-4/5 max-w-md">
        <div className="text-center p-4">
          <h1>Quiz 2</h1>
        </div>
        <div className="text-center">
          <h2>What problem does Base (as a Layer 2 solution) help solve?</h2>
        </div>
        <div className="flex flex-col px-4 py-2">
          {data[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`border p-2 my-2 rounded-lg ${selectedOption === option ? 'bg-bg' : 'bg-white text-bg'}`}
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
          {showResult && (
            <div className={`mt-4 ${selectedOption === data[currentQuestion].answer ? 'text-green-500' : 'text-red-500'}`}>
              {selectedOption === data[currentQuestion].answer
                ? 'Correct!'
                : `Incorrect! The correct answer is: ${data[currentQuestion].answer}`}
            </div>
          )}
        </div>
      </div>

      <div className="p-4">
      <button
          onClick={() => handleClick('/moduletwo')}
          className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton"
        >
          Back
        </button>
        <button
          onClick={handleCheck}
          className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton"
        >
          Check Answer
        </button>
        {showNextButton && (
          <button
            onClick={() => handleClick('/moduleide')}
            className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default QuizTwo