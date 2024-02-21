import React, { useState } from "react";

export default function TextForm() {
    const [Text, setText] = useState('');
    let handleUpperCase = () => {
       let newText = Text.toUpperCase();
       setText(newText);
    }
    let handleLowerCase = () => {
       let newText = Text.toLowerCase();
       setText(newText);
    }
    let handleExtraSpaces = () => {
       let newText = Text.replace(/\s+/g, ' ');
       setText(newText);
    }
    let handleClearText = () => {
       let newText = '';
       setText(newText);
    }
    let handleCopyText = () => {
        let newText = document.getElementById('myBox');
        newText.select();
        navigator.clipboard.writeText(newText.value);
        
    }
    let handleOnChange = (event) => {
        setText(event.target.value);
    }
  return (
    <>
      <div className="container my-3">
        <h1>Enter Text to Analyse</h1>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="myBox"
            value={Text}
            onChange={handleOnChange}
            rows={8}
            style={{height:'100%'}}></textarea>
        </div>
        <button disabled={Text.length<=0?true:false} onClick={handleUpperCase} type="button" className="btn btn-primary my-3">Convert to UpperCase</button>
        <button disabled={Text.length<=0?true:false} onClick={handleLowerCase} type="button" className="btn btn-primary my-3 mx-3">Convert to LowerCase</button>
        <button disabled={Text.length<=0?true:false} onClick={handleExtraSpaces} type="button" className="btn btn-primary my-3 mx-3">Remove Extra Spaces</button>
        <button disabled={Text.length<=0?true:false} onClick={handleCopyText} type="button" className="btn btn-primary my-3 mx-3">Copy Text</button>
        <button disabled={Text.length<=0?true:false} onClick={handleClearText} type="button" className="btn btn-primary my-3 mx-3">Clear Text </button>
      </div>
      <div className="container">
        <h3>Text summary</h3>
        <p>{Text.split(' ').length} words and {Text.length} characters</p>
        <p>{0.08 * Text.split(' ').length} Mins to read</p>
        <strong>Preview</strong>
        <p>{Text}</p>
      </div>
    </>
  );
}
