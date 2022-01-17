import { CardStyled, ContainerStyled } from "./styled"
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransaction'

export const Summary = ():JSX.Element => {
    const locales = 'pt-BR'
    const currencyMoney = 'BRL'
    const { data } = useTransactions()

    const totalDeposits = data.reduce((acc, item)=>{
        if(item.type === 'deposit'){
            return acc + item.amount
        }
        return acc
    },0)
    
    const totalWithdraw = data.reduce((acc, item)=>{
        if(item.type === 'withdraw'){
            return acc + item.amount
        }
        return acc
    },0)

    const summary = data.reduce((acc, item)=>{
        if(item.type ==='deposit'){
            acc.deposits += item.amount
            acc.total += item.amount
        }else{
            acc.withdraws += item.amount
            acc.total -= item.amount
        }
        return acc;
    },{
        deposits: 0,
        withdraws: 0,
        total: 0,
    })

    return(
        <ContainerStyled>
            <CardStyled>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                {summary.deposits.toLocaleString(locales,{ style: 'currency', currency: currencyMoney})}
                </strong>   
            </CardStyled>
            <CardStyled>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    - {summary.withdraws.toLocaleString(locales,{ style: 'currency', currency: currencyMoney})}
                </strong>   
            </CardStyled>
            <CardStyled isTotal>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    {summary.total.toLocaleString(locales,{ style: 'currency', currency: currencyMoney})}
                </strong>   
            </CardStyled>
        </ContainerStyled>
    )
}