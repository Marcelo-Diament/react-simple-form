import React, { useState } from 'react'
import Form from '../Form'
import Input from '../Input'

const FormController = ({ ...props }) => {
  const { action, method, inputs } = props
  const [formValues, setFormValues] = useState({})

  const handleInputUpdate = (e) => {
    let lastFormValues = formValues,
      { name: inputName, value: inputValue } = e.target
    if (inputValue.length) {
      lastFormValues[inputName] = inputValue
      setFormValues(lastFormValues)
    } else {
      delete lastFormValues[inputName]
      setFormValues(lastFormValues)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem('formResults', JSON.stringify(formValues))
    console.table(formValues)
  }

  return (
    <>
      <Form
        action={action}
        method={method}
        onSubmit={handleSubmit}
      >
        {inputs.map((input) => {
          const { name, type, label, required, widthPct } = input
          return (
            <Input
              name={name}
              type={type}
              label={label}
              key={name}
              required={required}
              widthPct={widthPct}
              handleBlurValue={handleInputUpdate}
            />
          )
        })}
        <div className="button-container">
          <button>Enviar</button>
        </div>
      </Form>
    </>
  )
}

export default FormController
