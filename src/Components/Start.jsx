import React, { useRef } from 'react'

const Start = ({ setUserName }) => {
  const inputRef = useRef();

  const HandleClick = () => {
    inputRef.current.value && setUserName(inputRef.current.value);
  };

  return (
    <div className="start">
      <input
        placeholder="Enter Your name"
        className="startInput"
        ref={inputRef}
      />
      <button className="startButton" onClick={HandleClick}>
        
        Start
      </button>
    </div>
  );
};

export default Start