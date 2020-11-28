import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <main>
        <form action="" method="get">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" name="name" key="name"/>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" key="email"/>
          <button>Enviar</button>
        </form>
      </main>
    </div>
  );
}

export default App;
