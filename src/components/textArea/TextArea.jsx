import React from 'react'

const TextArea = ({maxLength,placeholder,value,onChangeTextArea,count,className,style}) => {
  return (
    <div>
    <textarea maxlength={maxLength} placeholder={placeholder} className={'caption' || className} value={value} onChange={onChangeTextArea} style={style}/>
      <p className='characters'> Characters left: {count}</p>
    </div>
  )
}

export default TextArea