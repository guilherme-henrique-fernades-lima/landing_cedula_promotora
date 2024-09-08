import styled from "styled-components";

export const Section = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;
	min-height: 100%;
    height: 100%;
    width: 100%;
    margin: 80px 0;  
    
    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
         margin: 30px 0;  
    }
    
    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
         padding: 50px 0;
    }
`;

export const Content = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	   
    width: 100%;
    padding: 60px;
    background-color: #fff;
    margin-top: 40px;
    border-radius: 18px;

     @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 40px;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        padding: 20px;
    }
`;

export const WrapperInfo = styled.div`
    display: flex;
	align-items: center;
	justify-content: flex-start;
    flex-direction: row;	   
    width: 100%; 
    margin: 5px 0;  

    .icon{
        svg{
            width: 40px;
            height: 40px;
            color: ${(props) => props.theme.colors.brand}
        }
    }

    p{
        margin-left: 15px;
        font-weight: 700;
        color: ${(props) => props.theme.colors.text}
    }

    a{
        text-decoration: none;
        color: ${(props) => props.theme.colors.text};
        margin-left: 15px;
        font-weight: 700;

        &:hover{
            color: ${(props) => props.theme.colors.brand};
            text-decoration: underline;
        }
    }


    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        .icon{
            svg{
                width: 24px;
                height: 24px;                
            }
        }

        p{
            font-size: 14px;
            
        }

        a{
            font-size: 14px;
           
        }
    }

     @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        a{
            font-size: 14px;
            white-space: nowrap; 
            overflow: hidden; 
            text-overflow: ellipsis; 
            width: 65ch; 
        }
    }


`;
