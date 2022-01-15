import React, { useState } from 'react';
import Modal from 'react-modal';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { TransactionModal } from './components/TransactionModal';
import { GlobalStyled } from './styles/global';

function App() {
  const [isOpenModalTransaction, setIsOpenModalTransaction] = useState<boolean>(false);
  const handleOpenModal = () => {
      setIsOpenModalTransaction(true)
  }

  const handleCloseModal = () => {
      setIsOpenModalTransaction(false)
  }

  return (
    <>
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
    </>
    
  );
}

export default App;