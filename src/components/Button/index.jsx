import React from 'react'

const Button = ({
    text,
    className,
    onButtonClick,
    icon,
    btnstyle,
    type,
    disabled = false
  }) => {
    return (
      <button
        type={type}
        style={btnstyle}
        title={text}
        className={className || "Button_Wrap"}
        onClick={onButtonClick}
        disabled={disabled}
      >
        {icon} {text}
      </button>
    );
  }

  export default Button