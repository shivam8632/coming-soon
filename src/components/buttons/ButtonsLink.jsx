import React from 'react';
import { Link } from 'react-router-dom';

export default function PrimaryButtonLink({buttonText, buttonLink, buttonClass}) {
  return (
    <Link to={buttonLink} className={`primary-button ${buttonClass}`}>{buttonText}</Link>
  )
}
