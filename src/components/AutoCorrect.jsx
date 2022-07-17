import React, { useState } from 'react'
import styled from "styled-components";

const TextArea = styled.textarea`
  width: 500px;
  height: 20vh;
  outline: none;
  background-color: lightGrey;
  font-size: 1.2rem;
  margin-top: 1rem;
`;

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
        <h3>
          Once you type a word that is in our data with the same misspelling,{" "}
          <br /> it will automatically correct that word after passing the
          space.
        </h3>


        <TextArea
          value={text}
          placeholder = "Type here"
          onChange={(e) => {
              checkForWordMatch(e.target.value);
            }}
        />
      </>
    );
}

export default AutoCorrect
