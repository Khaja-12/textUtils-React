import React, { useState } from 'react'

export default function TextforHtmlm(props) {
  const handleUPClick = () => {
    // console.log("uppercase was click " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to upperCase','success')
  }
  const handleOnCopy = () => {
    let text = document.getElementById("myBox")
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Copy to Clipboard','success')
  }
  const handleclearClick = () => {
    let newText = (" ");
    setText(newText);
    props.showAlert('Text has been Clear','success')
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert('Extra space has been Clear','success')
  }
  // const handleTitleClick = ()=>
  // {
  //   // console.log("uppercase was click " + text);
  //   var newText = text.split(" ")
  //   var newText = text[i].charAt(0).toUpperCase
  //   setText(newText);
  // }
  const handlelowClick = () => {
    // console.log("uppercase was click " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowerCase','success')
  }
  const handleOnChange = (event) => {
    // console.log("on chamge");
    setText(event.target.value)

  }
  const [text, setText] = useState('');
  // text = "new text"; // wrong way to chnage the state 
  // setText("new text"); // correct way to change the state
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h1>{props.heading}</h1>
        <div className="mb-3" >
          <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10" placeholder='Type or Paste your content Here' style={{backgroundColor: props.mode === 'dark' ? '#042743' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUPClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handlelowClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleclearClick}>Clear</button>
        <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Clear Extra Space</button>
      </div>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
        <h2>Your Text Summary</h2>
        <p>{text.split(" ").length} Words And {text.length}Character</p>
        <p>{0.08 * text.length} Minute To Read</p>
        <h2>Preview</h2>
        <p> {text.length>0?text : 'enter something in the textbox above to preview it here'}</p>
      </div>
    </>
  )
}

