import styled from "styled-components";

//Icons
import { Handshake } from '@styled-icons/fa-regular'

export const Section = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;
	min-height: 100%;
    height: 100%;
    width: 100%;
    padding: 80px 0;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    gap: 16px; 
    width: 100%;
    box-sizing: border-box;
    margin-top: 60px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr); 
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr; 
    }
`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;    
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    transition: transform 0.3s ease;  

    .circle{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 128px;
        height: 128px;
        border-radius: 50%;
        background-color: ${(props) => props.theme.colors.brand};

        .circleInside{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            width: 116px;
            height: 116px;
            background-color: ${(props) => props.theme.colors.brand};
            border: 5px solid #fff;
        }
    }

    h3{
        font-weight: 900;
        color: ${(props) => props.theme.colors.brand};
        margin: 20px 0;
    }

    p{
        color: ${(props) => props.theme.colors.text}
    }
`

export const Icon = styled(Handshake)`
  color: #fff;
  width: 70px;
  height: 70px;  
`



