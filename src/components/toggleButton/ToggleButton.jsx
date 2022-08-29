import React from 'react'

const ToggleButton = ({isOn,handleToggle,title, id, htmlFor}) => {
  return (
    <div className='toggleholder'>
      <input
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
        value={isOn}
        onChange={handleToggle}
      />
      <label
        className="react-switch-label"
        htmlFor={htmlFor}
      >
        <span className={`react-switch-button`} />
      </label>
      <p>{title}</p>
    </div>
  )
}

export default ToggleButton