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

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
         padding: 50px 0;
   }
`;


export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 16px; 
    width: 100%;
    margin-top: 80px;   

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
        grid-template-columns: 1fr; 
    }

`;

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;        
    padding: 20px;    
    text-align: center;
    border: 1px solid transparent;  
    transition: all .3s ease ;

    &:hover{
        background-color: #fff;

        svg{           
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
        font-size: 16px;
    }

     @media (max-width: ${(props) => props.theme.breakpoints.sm}) {

        svg{
            width: 110px;
            height: 110px;
        }

        h3{
            font-size: 20px;
        }

        span{
            font-size: 14px;
        }

         &:hover{
            h3{
                font-size: 20px;
            }
        }

    }

    @media (max-width: ${(props) => props.theme.breakpoints.xs}) {

        svg{
            width: 110px;
            height: 110px;
        }

        h3{
            font-size: 20px;
        }

        span{
            font-size: 14px;
        }

         &:hover{
            h3{
                font-size: 20px;
            }
        }

    }

`



