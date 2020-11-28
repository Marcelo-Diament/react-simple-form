import React from 'react'

const Input = ({ ...props }) => {
  const { label, name, type, required, widthPct, handleBlurValue } = props
  return (
    <div className="form-input" style={{ flexBasis: `${widthPct - 2}%` }}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={name}
        required={required}
        onBlur={handleBlurValue}
      />
    </div>
  )
}

export default Input