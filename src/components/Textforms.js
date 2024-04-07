import React from 'react'
import PropTypes from 'prop-types'

export default function Textforms(props) {
    return (
        <div>
            <div class="mb3">
                <h1>{props.heading}</h1>
                <label for="myBox" class='form-label'></label>Text Area
                <textarea id="myBox" class="form-control" rows="8"></textarea>
            </div>
        </div>
    )
}

Textforms.propTypes = {
    textArea: PropTypes.string.isRequired
}

Textforms.defaultProps = {
    textArea: "Set text here"
}