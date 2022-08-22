import React,{useState,useEffect} from 'react'

const HorizontalTab
 = ({options, onChange, defaultValue="All"}) => {
    const initialSelectedValue = options.map((item => item))

  const [selectedLabel, setSelectedLabel] = useState("");
  const [selectedValue, setSelectedValue] = useState(initialSelectedValue[0].value);

  const onTabClicked = (value) => () => {
    onChange(value);
    setSelectedValue(value);
  };

  useEffect(() => {
    const selectedOption = options.find((opt) => opt.value === selectedValue);
    setSelectedLabel(selectedOption?.label);
  }, [selectedValue]);
  return (
    <div className='horizontalTabWrapper'>
      <ul>
        {options.map((option) => (
          <li
            onClick={onTabClicked(option.value)}
            key={option.value}
            className={selectedLabel === option.label && "activeTab"}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HorizontalTab
