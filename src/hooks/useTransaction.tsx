import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
// ========================================================================

import { TransactionType } from '../components/TransactionsTable';
import { api } from '../services/api';

type PropsProvider = {
    data: TransactionType[]
    createTransaction: (transaction:TransactionInput)=> Promise <void>
}

type PropsContext = {
    children: ReactNode;
    
}

export type TransactionInput = Omit<TransactionType, 'id' | 'createdAt'>
const TransactionsContext = createContext<PropsProvider>({} as PropsProvider);

export const TransactionsProvider = ({children}:PropsContext) => {
    const [data, setData] = useState<TransactionType[] | []>([])
    
    useEffect(()=> {
        api.get('transactions')
            .then(response => setData((response.data.transactions)))
    },[data])

    const createTransaction = async (transaction:TransactionInput) => {
        await api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider value={{
            data,
            createTransaction
        }}>
            {children}
        </TransactionsContext.Provider>
    )

}

export const useTransactions = () => {
    const context = useContext(TransactionsContext)

    return context
}