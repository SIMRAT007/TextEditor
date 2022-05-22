import React, { useState } from 'react'



export default function Textarea(props) {

    const handleUpClick = () => {
        let newtxt = text.toUpperCase();
        setText(newtxt);
        props.showAlert("Text has been converted to UpperCase", "success")
    }
    const handleLoClick = () => {
        let newtxt = text.toLowerCase();
        setText(newtxt);
        props.showAlert("Text has been converted to LowerCase", "success")
    }
    const handleClearClick = () => {

        setText("");
        props.showAlert("Text has been cleared", "success")
    }
    const handleRedundancy = () => {
        let set1 = new Set(text.split(" "));
        let newText = Array.from(set1).join(" ");
        setText(newText);
        props.showAlert("Unwanted spaces has been removed", "success")
    }
    const handleCopyClick = () => {

        navigator.clipboard.writeText(text);
        props.showAlert("Text has been coppied to clipboard", "success")

    }

    // handling on change
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const keypress = (event) => {
        var x = event.keyCode;
        
        if (x === 13) {  
            
            
            console.log("You pressed the Enter key!");
        }
    }

        const [text, setText] = useState('Enter text here...');

        return (
            <>
                <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <div className="mb-3 mt-3">
                        <h3>{props.heading}</h3>
                        <textarea className="form-control" value={text} onChange={handleOnChange} id="txtbox" rows="8" onKeyDown={keypress}></textarea>
                    </div>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
                    <button className="btn btn-primary mx-1 my-1" onClick={handleRedundancy}>Remove Unwanted Space</button>
                </div>
                <div className={`container text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <h3 className="mt-2">Text Summary</h3>
                    <p><strong>{text.length > 0 ? text.trim().split(" ").length : 0}</strong> words | <strong>{text.length}</strong> characters</p>
                    <p><strong>{0.008 * (text.length > 0 ? text.trim().split(" ").length : 0)}</strong> Minutes read</p>
                    <h3 className="mt-2">Preview</h3>
                    <p className={`border border-${props.mode === 'light' ? 'dark' : 'light'} bg-${props.mode}`}>{text}</p>

                </div>
            </>
        )
    }

