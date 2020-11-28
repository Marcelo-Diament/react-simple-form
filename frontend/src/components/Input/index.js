import React from 'react'

const Input = ({ ...props }) => {
  const { label, name, type, required } = props
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} id={name} required={required} />
    </div>
  )
}

export default Input