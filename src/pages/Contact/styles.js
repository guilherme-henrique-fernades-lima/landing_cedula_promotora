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
	justify-content: space-between;
    flex-direction: row;	   
    width: 100%;
    padding: 40px;
    background-color: #fff;
    margin-top: 40px;
    border-radius: 18px;
    overflow: hidden;

    @media (max-width: ${(props) => props.theme.breakpoints.md}) {
        padding: 30px;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }

    @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
        padding: 10px;
    }
`;

export const ContentInfo = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	    
     overflow: hidden;
   
`;

export const WrapperInfo = styled.div`
    display: flex;
	align-items: center;
	justify-content: flex-start;
    flex-direction: row;	   
    width: 100%; 
    margin: 5px 0;  
    overflow: hidden;

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
         overflow: hidden;

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
        }
    }
`;

export const ImageMap = styled.img`
  width: 500px; 
  height: 100%; 
  right: 0;
  bottom: 0;
  border-radius: 8px;
 

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 20px;
    width: 100%; 
  }
`;