import { ContainerStyled } from "./styled"

export const TransactionsTable = ():JSX.Element => {
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
                    <tr>
                        <td>Desenvolvimento de Website</td>
                        <td className="deposit">R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">- R$1.000,00</td>
                        <td>Casa</td>
                        <td>20/02/2022</td>
                    </tr>
                </tbody>
            </table>
        </ContainerStyled>
    )
} 