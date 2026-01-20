import React from 'react';
import './Button.css';

const Button = ({ type, children }) => {
  const btnClass = `btn btn-${type}`;

  return (
    <button className={btnClass}>
      {children}
    </button>
  );
};

export default Button;