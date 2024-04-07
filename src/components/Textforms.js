import React from 'react'
import PropTypes from 'prop-types'

export default function Textforms(props) {
    return (
        <div>
            <div className="mb-3">
                <h1>{props.heading}</h1>
                <textarea id="myBox" className="form-control" rows="8"></textarea>
            </div>
            <button className='btn btn-primary'>Convert to UpperCase</button>
        </div>
    )
}

Textforms.propTypes = {
    textArea: PropTypes.string.isRequired
}

Textforms.defaultProps = {
    textArea: "Set text here"
}