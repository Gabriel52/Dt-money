import React from 'react'

import logoImg from '../../assets/logo.svg'
import { ContentStyled, HeaderStyled } from './styled'

export const Header = ():JSX.Element => {
    return (
        <HeaderStyled>
            <ContentStyled>
                <img src={logoImg} alt="dt money"  />
                <button>
                    Nova Transação
                </button>
            </ContentStyled>
        </HeaderStyled>
    )
}