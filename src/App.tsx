import React, { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionModal } from './components/TransactionModal';
import { GlobalStyled } from './styles/global';
import { TransactionsProvider } from './hooks/useTransaction';

function App() {
  const [isOpenModalTransaction, setIsOpenModalTransaction] = useState<boolean>(false);
  const handleOpenModal = () => {
      setIsOpenModalTransaction(true)
  }

  const handleCloseModal = () => {
    setIsOpenModalTransaction(false)
  }

  return (
    <TransactionsProvider>
      <Header 
        setIsOpenModalTransaction={setIsOpenModalTransaction} 
        handleOpenModal={handleOpenModal}
      />
      <Dashboard />
      <TransactionModal
        handleCloseModal={handleCloseModal}
        isOpenModalTransaction={isOpenModalTransaction} 
      />
      <GlobalStyled />
    </TransactionsProvider>
    
  );
}

export default App;