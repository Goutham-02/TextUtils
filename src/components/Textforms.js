import React, {useState} from 'react'
import './buttonsStyles.css';

export default function Textforms(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase", "success");
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text Cleared", "success");
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text Copied to Clipboard", "success");
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed", "success");
    }

    const [text, setText] = useState('');
    let trimmedText = text.trim();
    let numbers = trimmedText.split(" ").filter((element)=>{return element.length!==0}).length;
    let minread = 0.008*numbers;
    
    if (text === '') {
        minread = 0;
        numbers = 0;
    }
    
    return (
        <>
            <div className='container' style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea id="myBox" placeholder='Enter text here' value={text} onChange={handleOnChange} className="form-control" rows="8" style={{backgroundColor : props.mode === 'dark' ? '#4c5463' : 'white', color: props.mode === 'dark' ? 'white' : 'black'}}></textarea>
                </div>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'} m-2`} onClick={handleUpClick}>Convert to UpperCase</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'} m-2`} onClick={handleLowClick}>Convert to LowerCase</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'} m-2`} onClick={handleClearClick}>Clear Text</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'} m-2`} onClick={handleCopy}>Copy Text</button>
                <button className={`btn ${props.mode === 'dark' ? 'btn-light' : 'btn-dark'} m-2`} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color : props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text Summary</h1>
                <p>{numbers} word(s) and {text.length} characters</p>
                <p>Approx. {minread} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0 ? text:"Enter something to preview"}</p>
            </div>
        </>
    )
}