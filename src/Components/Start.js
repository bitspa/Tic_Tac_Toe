import React, { useRef } from "react";
import "../App.css";
const Start = ({ setName1, setName2 }) => {
  const inputRef = useRef();
  const inputRef1 = useRef();

  const handleClick = () => {
    inputRef.current.value && setName1(inputRef.current.value);
    inputRef1.current.value && setName2(inputRef1.current.value);
  };

  return (
    <>
   
    <div className="StartDesign">
    <div className= "Detail_section1">
    Noughts and Crosses 
    </div>
    <div>
      <input
        type="text"
        placeholder="Enter Name of Player1"
        ref={inputRef}
        className="form-control"
      />
      </div>
      <div>
      <input
        type="text"
        placeholder="Enter Name of Player2"
        ref={inputRef1}
        className="form-control"
      />
       </div>
       <div>
      <button className="mt-2" onClick={handleClick}>
      <span>
      Start Game
      </span>
      </button>
      </div>
    </div>
    </>
  );
};

export default Start;