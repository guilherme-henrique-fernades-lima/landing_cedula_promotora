import styled from "styled-components";

export const Section = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;
	min-height: 100%;
    height: 100%;
    width: 100%;
    padding: 80px 0;

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
         padding: 50px 0;
    }
`;

export const Content = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: space-between;
    flex-direction: row;	
    width: 100%;
    margin-top: 20px;

     @media (max-width: ${(props) => props.theme.breakpoints.md}) {
       justify-content: center;
       align-items: center;
       flex-direction: column;	
       width: 100%; 
   }
`;

export const BrandHistoryWrapper = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	  
    flex: .5;

    p{
        margin: 12px 0;
        color: ${(props) => props.theme.colors.text};
        text-align: left;
        line-height: 1.5; 
        letter-spacing: 0.8px;

        strong{
            color: ${(props) => props.theme.colors.brand};
            font-weight: 900;

        }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.lg}) {
       flex: .6;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        flex: 1;

        p {
            font-size: 14px;
            text-align: left;            
        }
   }
`;

export const CardsBrandWrapper = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	  
    flex: .3;

     @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        width: 100%;
    }
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px; 
    width: 100%;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        grid-template-columns: repeat(2, 1fr); 
    }

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        margin-top: 30px;
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
    background-color: #fff;
    text-align: center;
    width: 180px;
    height: 180px;   
    transition: transform 0.3s ease;  
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    h3{
        color: ${(props) => props.theme.colors.brand};
        font-weight: 900;
        margin-bottom: 20px;
        font-size: 30px;
    }

    span{
        color: #575757;
        font-size: 16px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          width: 100%;

          span{
            font-size: 14px;
          }
    }
    
`





