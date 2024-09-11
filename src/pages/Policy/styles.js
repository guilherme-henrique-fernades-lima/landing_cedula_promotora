import styled from 'styled-components';

export const Section = styled.div`
    display: flex;
	align-items: flex-start;;
	justify-content: center;
    width: 100%;   
    
`;

export const PrivacySection = styled.div`  

  padding: 80px 0;  
  width: 100%;

  h3 {
    color: ${(props) => props.theme.colors.brand};
    font-size: 20px;
    margin-bottom: 10px;
  }

  p {
    color: ${(props) => props.theme.colors.text};
    line-height: 1.5;
    text-align: left;
    font-size: 16px;

    strong{
         color: ${(props) => props.theme.colors.brand};
    }
  }

   @media (max-width: ${(props) => props.theme.breakpoints.md}) {
          h3 {
                font-size: 16px;
            }

            p {
                font-size: 14px; 
                letter-spacing: 1.2px;
            }
   }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
         padding: 50px 0;
   }
`;