import React from 'react';
import { ContextProvider } from './providers/ProviderComposer';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.js';
import Menu from './components/Menu';
import './assets/styles/global.css';


function App() {
  return (
    <ContextProvider>
    <BrowserRouter>
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-4">
            <Menu />
          </div>
          <div className="col-4 inner-col vh-100">
            <Routes />
          </div>
          <div className="col-5"></div>
        </div>
      </div>
    </BrowserRouter>
  </ContextProvider>
  );
}

export default App;
