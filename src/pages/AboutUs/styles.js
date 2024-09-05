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
`;

export const Content = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: space-between;
    flex-direction: row;	
    width: 100%;
    margin-top: 20px;
    padding: 40px 0;
`;

export const BrandHistoryWrapper = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	  
    flex: .4;

    p{
        margin: 12px 0;
        color: ${(props) => props.theme.colors.text}
    }
`;

export const CardsBrandWrapper = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	  
    flex: .4;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
    gap: 16px; 
    width: 100%;    
    

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
    background-color: #fff;
    text-align: center;
    width: 100%;
    height: 100%;
    /* max-width: 220px;
    max-height: 220px; */
    transition: transform 0.3s ease;  
`





