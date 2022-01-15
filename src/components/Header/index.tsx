import React, { useState } from 'react'

import logoImg from '../../assets/logo.svg'
import { ContentStyled, HeaderStyled } from './styled'

type Props = {
    setIsOpenModalTransaction: React.Dispatch<React.SetStateAction<boolean>>
    handleOpenModal: ()=> void
}

export const Header = ({setIsOpenModalTransaction, handleOpenModal}:Props):JSX.Element => {

    return (
        <HeaderStyled>
            <ContentStyled>
                <img src={logoImg} alt="dt money"  />
                <button onClick={handleOpenModal}>
                    Nova Transação
                </button>
            </ContentStyled>
        </HeaderStyled>
    )
}