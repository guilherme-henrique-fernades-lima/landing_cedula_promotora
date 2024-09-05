import styled from "styled-components";

export const Section = styled.div`
    display: flex;
	align-items: flex-start;;
	justify-content: center;
    width: 100%;
    background: ${(props) => props.theme.colors.secondBrand};
    background: radial-gradient(circle, rgba(31,71,133,0.9) 0%, rgba(7,28,61,1) 100%);
`;

export const Content = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;
    padding: 80px 0;
    height: 100%;
    width: 100%;
`;


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 16px; 
    width: 100%;
    margin-top: 80px;
    
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
    /* border-radius: 8px; */
    padding: 20px;    
    text-align: center;
    border: 1px solid transparent;  
    transition: all .3s ease ;

    &:hover{
        background-color: #fff;

        svg{
            width: 140px;
            height: 140px;
            color: ${(props) => props.theme.colors.secondBrand};
        }

        h3{
            color: ${(props) => props.theme.colors.secondBrand};
            font-weight: 900;
            margin-bottom: 20px;
            font-size: 30px;
        }

        span{
            color: ${(props) => props.theme.colors.secondBrand};
        }
    }

    svg{
        width: 140px;
        height: 140px;
        color: #fff;
    }

    h3{
        color: #fff;
        font-weight: 900;
        margin-bottom: 20px;
        font-size: 30px;
    }

    span{
        color: #fff;
    }
`



