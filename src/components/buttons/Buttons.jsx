import React from 'react'

const PrimaryButton = ({buttonText}) => {
  return (
    <button></button>
  )
}

const SecondaryButton = ({buttonText, buttonClass}) => {
  return (
    <button className={`${buttonClass} secondary-button`}>{buttonText}</button>
  )
}

export default SecondaryButton;