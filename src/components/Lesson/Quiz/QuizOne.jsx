// src/components/Lesson/Quiz/QuizOne.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet } from '../../CoinbaseWalletProvider';
import { completeQuiz, getUserQuizAttempt } from '../../contractInteractions';
import { createAccount } from '../../paymasterConfig';
import Web3 from 'web3';

console.log('Web3 version:', Web3.version);

const QUIZ_ID = 1; // Make sure this ID matches an existing quiz in your smart contract

const data = [
  {
    question: "What's the main goal of Web3?",
    options: [
      "To make the internet faster",
      "To give users more control over their online data and assets",
      "To create more social media platforms",
      "To increase online advertising"
    ],
    answer: "To give users more control over their online data and assets",
  }
];

const QuizOne = () => {
  const navigate = useNavigate();
  const { account: walletAccount, web3 } = useWallet();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [smartAccount, setSmartAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeAccount = async () => {
      try {
        const account = await createAccount();
        setSmartAccount(account);
      } catch (error) {
        console.error("Error initializing account:", error);
        setError("Failed to initialize account. Please try again.");
      }
    };
    initializeAccount();
  }, []);

  useEffect(() => {
    const checkQuizAttempt = async () => {
      if (smartAccount) {
        try {
          const attempt = await getUserQuizAttempt(smartAccount.address, QUIZ_ID);
          if (attempt && attempt.completed) {
            setQuizCompleted(true);
            setShowNextButton(true);
          }
        } catch (error) {
          console.error("Error checking quiz attempt:", error);
          setError("Failed to check quiz attempt. Please try again.");
        }
      }
    };
    checkQuizAttempt();
  }, [smartAccount]);

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
    
    if (!quizCompleted && smartAccount) {
      const score = selectedOption === data[currentQuestion].answer ? 100 : 0;
      try {
        const success = await completeQuiz(QUIZ_ID, score, smartAccount);
        if (success) {
          setQuizCompleted(true);
        } else {
          setError("Failed to complete the quiz. Please try again.");
        }
      } catch (error) {
        console.error("Error completing quiz:", error);
        setError("An error occurred while completing the quiz. Please try again.");
      }
    }
  };

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <div className="bg-bgBar rounded-md shadow-box w-4/5 max-w-md">
        <div className="text-center p-4">
          <h1>Quiz 1</h1>
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
          onClick={() => handleClick('/moduleone')}
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
            onClick={() => handleClick('/moduletwo')}
            className="bg-bgButton text-sm ml-2 px-4 py-2 rounded hover:bg-white hover:text-bgButton"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizOne;