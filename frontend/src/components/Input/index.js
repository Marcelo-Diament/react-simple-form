import React from 'react'

const Input = ({ ...props }) => {
  const { label, name, type, required, handleBlurValue } = props
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} required={required} onBlur={handleBlurValue} />
    </div>
  )
}

export default Input