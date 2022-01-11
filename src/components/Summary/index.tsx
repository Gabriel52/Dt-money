import { CardStyled, ContainerStyled } from "./styled"

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export const Summary = ():JSX.Element => {
    return(
        <ContainerStyled>
            <CardStyled>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="Entradas" />
                </header>
                <strong>
                    R$1000,00
                </strong>   
            </CardStyled>
            <CardStyled>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="Saídas" />
                </header>
                <strong>
                    - R$500,00
                </strong>   
            </CardStyled>
            <CardStyled isTotal>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>
                    R$500,00
                </strong>   
            </CardStyled>
        </ContainerStyled>
    )
}