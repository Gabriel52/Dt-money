import React from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyled } from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyled />
    </>
    
  );
}

export default App;