import styled from 'styled-components';


export const PromosContainer = styled.div`
    margin-top: 3.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    

    h2{
    font-size: 24px;
    font-weight: 700;
    text-align: center;
}
`

export const PromosOfertas  = styled.div`
     display: flex;
     flex-direction: row;
     gap: 13px;

     @media (max-width: 900px){
        flex-direction: column;
    }
`

export const PromoCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;

    h3{
        font-size: 18px;
        font-weight: 800;
    }

    p{
        font-size: 14px;
        font-weight: 400;
    }
`

export const Divider  = styled.span`
    margin-top: 20px;
    border: 0.5px solid white;
`