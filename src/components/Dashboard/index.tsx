import { Summary } from "../Summary"
import { TransactionsTable } from "../TransactionsTable"
import { ContainerStyled } from "./styled"

export const Dashboard = ():JSX.Element => {
    return(
        <ContainerStyled>
            <Summary />
            <TransactionsTable/>
        </ContainerStyled>
    )
}