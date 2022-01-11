import styled from "styled-components";

export const ContainerStyled = styled.section`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    
    margin-top: -10rem;

`

type PropsCard = {
    isTotal?: boolean;
}

export const CardStyled = styled.div<PropsCard>`
    background-color: var(--shape);
    background-color: ${(props)=>(!props.isTotal ? '#fff' : '#33CC95')};
    padding: 1.5rem 2rem;
    color: ${(props)=>(!props.isTotal ? '#363F5F' : '#FFF')};
    border-radius: 0.25rem;

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;

        line-height: 3rem;
    }

`