const InputField = ({
    className,
    type,
    placeholder,
    id,
    onChangeMethod,
    value,
    autoComplete,
    name,
    customStyles = null,
    required = true,
    readonly = false,
    disabled = false,
  }) => {
    return (
      <input
        style={customStyles}
        className={className || "inputField_Wrap"}
        type={type}
        placeholder={placeholder}
        id={id}
        onChange={onChangeMethod}
        required={required}
        readOnly={readonly}
        disabled={disabled}
        value={value}
        autoComplete = {autoComplete}
        name ={name}
      />
    );
  };

  export default InputField