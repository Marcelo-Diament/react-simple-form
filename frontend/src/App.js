import FormController from './components/FormController'
import logo from './logo.svg';
import './App.css';

function App() {
  const inputs = [
    {
      label: 'Nome',
      name: 'name',
      type: 'text',
      required: true,
      widthPct: '50'
    },
    {
      label: 'Sobrenome',
      name: 'lastname',
      type: 'text',
      required: false,
      widthPct: '50'
    },
    {
      label: 'Email',
      name: 'email',
      type: 'email',
      required: true,
      widthPct: '60'
    },
    {
      label: 'Idade',
      name: 'age',
      type: 'number',
      required: false,
      widthPct: '15'
    },
    {
      label: 'Nascimento',
      name: 'birthday',
      type: 'date',
      required: false,
      widthPct: '15'
    },
    {
      label: 'Cor Preferida',
      name: 'preferedColor',
      type: 'color',
      required: false,
      widthPct: '10'
    },
    {
      label: 'Início do Expediente',
      name: 'workhoursStart',
      type: 'time',
      required: false,
      widthPct: '33'
    },
    {
      label: 'Final do Expediente',
      name: 'workhoursEnd',
      type: 'time',
      required: false,
      widthPct: '33'
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
