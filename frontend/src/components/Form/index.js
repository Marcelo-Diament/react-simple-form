import React from 'react'

const Form = () => (
  <form action="" method="get">
    <label htmlFor="name">Nome Completo</label>
    <input type="text" name="name" key="name" />
    <label htmlFor="email">Email</label>
    <input type="email" name="email" key="email" required/>
    <button>Enviar</button>
  </form>
)

export default Form