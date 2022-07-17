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

const Link = styled.a`
text-decoration: none;
margin-left: 0.3rem;
`

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
    const [display, setDisplay] = useState(false)

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
        <h4 style={{ color: "red" }}>
          To check the data, what we have please click on this
          <strong style={{ color: "red" }}>
            <Link onClick={() => setDisplay(true)} href="#">
              link
            </Link>
          </strong>
        </h4>
        {display && (
          <>
            <div>
              <p>
                Type <strong>moshin</strong> 👉 Get <strong>Mohsin</strong>
              </p>
              <p>
                Type <strong>masaai</strong> 👉 Get <strong>Masai</strong>
              </p>
              <p>
                Type <strong>devloper</strong> 👉 Get <strong>developer</strong>
              </p>
              <p>
                Type <strong>github</strong> 👉 Get <strong>GitHub</strong>
              </p>
              <p>
                Type <strong>coding</strong> 👉 Get <strong>codding</strong>
              </p>
              <p>
                Type <strong>react</strong> 👉 Get <strong>React</strong>
              </p>
              <button onClick={() => setDisplay(false)}>Got it</button>
            </div>
          </>
        )}
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
