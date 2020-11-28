import React from 'react'
import Form from '../Form'
import Input from '../Input'

const FormController = ({ ...props }) => {
  const { action, method, inputs } = props

  return (
    <>
      <Form
        action={action}
        method={method}
      >
        {inputs.map((input) => {
          const { name, type, label, required } = input
          return (
            <Input
              name={name}
              type={type}
              label={label}
              key={name}
              required={required}
            />
          )
        })}
        <button>Enviar</button>
      </Form>
    </>
  )
}

export default FormController
