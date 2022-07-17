import React, { useState } from 'react'

const data = {
  moshin: "Mohsin",
  masaai: "Masai",
  devloper: "developer",
  github: "GitHub",
  coding: "codding",
  react: "React",
    };

const AutoCorrect = () => {
    const [text, setText] = useState('')

    function checkForWordMatch(e) {
       
      if (e[e.length - 1] === " ") {
        const wordArr = e.split(" "); 
        const word = wordArr[wordArr.length - 2]; 
   
          const convertToCorrect = data[word]; 
          
        if (convertToCorrect) { 
          wordArr[wordArr.length - 2] = convertToCorrect; 
        }
        e = wordArr.join(" "); 
      }
      setText(e);
    }
    return (
      <>
     
        <textarea
          value={text}
          onChange={(e) => {
            checkForWordMatch(e.target.value);
          }}
        />
      </>
    );
}

export default AutoCorrect
