import React,{useState} from 'react'

const SocialSelect = ({next}) => {
    const [inputValue, setInputValue] = useState("yes")

  return (
    <div>
        <input type="text" value={inputValue} name="" id="" onChange={(e)=>setInputValue(e.target.value)} />
        <button
                    onClick={() => next(inputValue)}
                    disabled={!inputValue}
                  >
                    Next
                  </button>
    </div>
  )
}

export default SocialSelect