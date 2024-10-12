const Question = ({ question, options, onAnswer, onNext, showNextButton }) => {
    
  return (
      <div className="flex flex-col justify-center items-center pt-10 mt-5">
        <h2>{question}</h2>
        {options.map((option, index) => (
          <button className=" bg-bgBox hover:bg-bgButton p-4 rounded-xl " key={index} onClick={() => onAnswer(option)}>
            {option}
          </button>
        ))}
        {showNextButton && <button className="bg-bgButton text-sm px-4 py-2 rounded hover:bg-white hover:text-bgButton" onClick={onNext}>Next </button>}
      </div>
    );
  };
  
  export default Question;