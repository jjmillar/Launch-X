import logo from './logo.svg';
import React from 'react';
import './App.css';
import ReactDOM from 'react-dom/client';

function App() {

  const root = ReactDOM.createRoot(document.getElementById('root'));

  let localtime = new Date();
  let qatar = new Date(localtime.getTime() + (3600000 * 9));
  const titulo = React.createElement(
    'h1',
    {},
    'La hora es:',
  );
  
  const horaMexico = React.createElement(
    'h2',
    {},
    'En Mexico: ' + new Date().toLocaleDateString('es-Mx')
  );

  const horaQatar = React.createElement(
    'h2',
    {},
    'En Qatar: ' + new Date().toLocaleDateString('es-Mx')
  );

    const headerApp = React.createElement(
      'div',
      {className: 'App-header'},
      titulo, horaMexico, horaQatar,
    );

   const divApp = React.createElement(
    'div',
    {className: 'App'},
    headerApp,
   )
/*
   const element = ( 
    <div className="App">
      <header className="App-header">
        <h1>La hora es:</h1>
        <h2> En México {new Date().toLocaleTimeString('es-Mx')}</h2>
        <h2> En Qatar: {qatar.toLocaleTimeString('es-Mx')}</h2>
      </header>
    </div>
  );*/
  root.render(divApp);
}

export default App;
