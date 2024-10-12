const Question = ({ question, options, onAnswer, onNext, showNextButton }) => {
    
  return (
      <div className="mt-5">
        <h2>{question}</h2>
        {options.map((option, index) => (
          <button className="flex m-4 flex-col items-start bg-bgBox hover:bg-bgButton p-4 rounded-xl " key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
        {showNextButton && <button className="bg-bgButton text-sm px-4 py-2 rounded hover:bg-white hover:text-bgButton" onClick={onNext}>Next </button>}
      </div>
    );
  };
  
  export default Question;