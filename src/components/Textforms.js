import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textforms(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        setText("You have clicked on Uppercase");
    }

    const handleOnChange = (event) => {
        console.log("on change");
    }
    const [text, setText] = useState('Enter text Here');
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea id="myBox" value={text} onChange={handleOnChange} className="form-control" rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick}>Convert to UpperCase</button>
        </div>
    )
}

Textforms.propTypes = {
    textArea: PropTypes.string.isRequired
}

Textforms.defaultProps = {
    textArea: "Set text here"
}