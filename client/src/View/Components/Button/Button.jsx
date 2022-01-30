import React from 'react';
import './Button.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function Button(props) {
    return <button className='Button'>{props.buttonText} <FontAwesomeIcon icon={faArrowRight} /> </button>;

  }

  export default Button;
