import Form from './components/Form'
import Input from './components/Input'
import logo from './logo.svg';
import './App.css';

function App() {
  const inputs = [
    {
      label: 'Nome Completo',
      name: 'name',
      type: 'text',
      required: false
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      required: true
    }
  ]

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Simple Form</h1>
      </header>
      <main className="App-main">
        <Form
          action="/"
          method="GET"
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
      </main>
    </div>
  );
}

export default App;
