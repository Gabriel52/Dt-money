import { useEffect, useState } from 'react'
// =======================================================
import { api } from '../../services/api'
import { ContainerStyled } from "./styled"

type TransactionType = {
    id?: number,
    title: string,
    amount: number,
    type: string,
    category: string,
    createdAt: Date
}

export const TransactionsTable = ():JSX.Element => {
    const locales = 'pt-BR'
    const currencyMoney = 'BRL'
    const [data, setData] = useState<TransactionType[] | []>([])
    useEffect(()=> {
        api.get('transactions')
            .then(response => setData((response.data.transactions)))
    },[])

    return (
        <ContainerStyled>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((item:TransactionType)=> (
                        <tr key={item.id}>
                            <td>{item.title}</td>
                            <td className={item.type}>
                                {item.amount.toLocaleString(locales,{ style: 'currency', currency: currencyMoney} )}
                            </td>
                            <td>{item.category}</td>
                            <td>{new Date(item.createdAt).toLocaleDateString(locales)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </ContainerStyled>
    )
} 