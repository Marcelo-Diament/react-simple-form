import React from 'react'

const Form = ({ children, ...props }) => {
  const { action, method } = props

  return (
    <div className="form-container">
      <form action={action} method={method}>
        {children}
      </form>
    </div>
  )
}

export default Form