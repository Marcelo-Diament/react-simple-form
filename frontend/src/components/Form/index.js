import React from 'react'

const Form = ({ children, ...props }) => {
  const { action, method, onSubmit } = props

  return (
    <div className="form-container">
      <form action={action} method={method} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  )
}

export default Form