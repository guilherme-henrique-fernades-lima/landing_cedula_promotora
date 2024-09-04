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
	justify-content: flex-start;
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
    flex: .6;
`;







