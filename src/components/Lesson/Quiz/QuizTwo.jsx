// src/components/Lesson/Quiz/QuizTwo.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../../CoinbaseWalletProvider';
import { completeQuiz, getUserQuizAttempt } from '../../contractInteractions';
import Web3 from 'web3';
// Add this logging
console.log('Web3 version:', Web3.version);

const QUIZ_ID = 2; // Assuming Quiz 2 has ID 2

const data = [
    {
        question: "What problem does Base (as a Layer 2 solution) help solve?",
        options: ["It makes websites look prettier", "It helps with slow and expensive transactions on Ethereum", "It creates new cryptocurrencies", "It replaces traditional banking"],
        answer: "It helps with slow and expensive transactions on Ethereum",
    }
];

const QuizTwo = () => {
  const navigate = useNavigate();
  const { account, web3 } = useWallet();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const checkQuizAttempt = async () => {
      if (account && web3 && web3.eth && web3.eth.Contract) {
        console.log('Account:', account);
        console.log('Web3 instance:', web3);
        console.log('Web3 eth methods:', Object.keys(web3.eth));
        const attempt = await getUserQuizAttempt(web3, account, QUIZ_ID);
        console.log('Quiz attempt:', attempt);
        if (attempt && attempt.completed) {
          setQuizCompleted(true);
          setShowNextButton(true);
        }
      } else {
        console.log('Web3 or account not fully initialized');
      }
    };
    checkQuizAttempt();
  }, [account, web3]);

  const handleClick = (route) => {
    navigate(route);
  };

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    if (selectedOption === data[currentQuestion].answer) {
      setShowNextButton(true);
    }
  };

  const handleCheck = async () => {
    setShowResult(true);
    setShowNextButton(true);
    
    if (!quizCompleted && account && web3) {
      const score = selectedOption === data[currentQuestion].answer ? 100 : 0;
      console.log('Completing quiz with:', { web3, account, QUIZ_ID, score });
      const success = await completeQuiz(web3, account, QUIZ_ID, score);
      console.log('Quiz completion result:', success);
      if (success) {
        setQuizCompleted(true);
      }
    }
  };

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="bg-bgBar rounded-md shadow-box w-4/5 max-w-md">
        <div className="text-center p-4">
          <h1>Quiz 2</h1>
        </div>
        <div className="text-center">
          <h2>{data[currentQuestion].question}</h2>
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
        {!quizCompleted && (
          <button
            onClick={handleCheck}
            className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton"
          >
            Check Answer
          </button>
        )}
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
};

export default QuizTwo;