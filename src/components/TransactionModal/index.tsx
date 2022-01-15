import react, { FormEvent, useState } from 'react';
import Modal from 'react-modal'
// =============================================
import { api } from '../../services/api';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { ButtonTransactionStyled, CloseButtonStyled, ContainerStyled, TransactionTypeContainer } from './styled';

type Props = {
    isOpenModalTransaction: boolean,
    handleCloseModal: ()=> void;
}
export const TransactionModal = ({handleCloseModal, isOpenModalTransaction}:Props):JSX.Element => {
    const [type, setType ] = useState<string>('deposit')
    const [title, setTitle ] = useState<string>('')
    const [category, setCategory ] = useState<string>('')
    const [value, setValue ] = useState<number>(0)

    const handleCreateNewTransaction =(evt: FormEvent) => {
        evt.preventDefault();
        const data = {
            title,
            value,
            category,
            type
        }

        api.post('/transactions', data)
    }

    return (
        <Modal 
            isOpen={isOpenModalTransaction}
            onRequestClose={handleCloseModal}
            overlayClassName='react-modal-overlay'
            className='react-modal-content'
        >
            <CloseButtonStyled 
                type='button' 
                onClick={handleCloseModal}
            >
                <img src={closeImg} alt="Fechar Modal" />
            </CloseButtonStyled>
            <ContainerStyled onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar transação</h2> 
                <input 
                    placeholder="Titulo" 
                    onChange={(evt)=> setTitle(evt.target.value)} 
                    value={title}
                />

                <input 
                    type="number" 
                    placeholder="Valor" 
                    onChange={(evt)=> setValue(Number(evt.target.value))} 
                    value={value}
                />

                <TransactionTypeContainer>
                    <ButtonTransactionStyled
                        type="button"
                        isActive={type=="deposit"}
                        activeColor="green"
                        onClick={()=>{setType('deposit')}}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </ButtonTransactionStyled>
                    <ButtonTransactionStyled
                        type="button"
                        isActive={type=="withdraw"}
                        activeColor="red"
                        onClick={()=>{setType('withdraw')}}
                    >
                        <img src={outcomeImg} alt="Saida" />
                        <span>Saida</span>
                    </ButtonTransactionStyled>
                </TransactionTypeContainer>

                <input 
                    placeholder="Categoria" 
                    onChange={(evt)=> setCategory(evt.target.value)} 
                    value={category}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </ContainerStyled>
        </Modal>
    ) 
}