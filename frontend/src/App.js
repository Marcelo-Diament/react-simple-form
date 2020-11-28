import FormController from './components/FormController'
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
        <FormController
          action="/"
          method="GET"
          inputs={inputs}
        />
      </main>
    </div>
  );
}

export default App;
