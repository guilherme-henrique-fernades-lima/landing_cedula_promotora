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
`;

export const ContentWrapper = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	   
    width: 100%;
    height: 340px;
    //border: 4px solid green;
    margin-top: 40px;
    position: relative;
`;

export const Content = styled.div`
    display: flex;
	align-items: flex-start;
	justify-content: flex-start;
    flex-direction: column;	   
    width: 100%;
    height: 100%;
    margin-top: 60px;
    border-radius: 18px;
    
    background: rgb(250,119,53);
    background: linear-gradient(75deg, rgba(250,119,53,1) 0%, rgba(236,89,14,1) 55%, rgba(131,50,9,1) 100%);
`;


export const ImageManager = styled.img`
  width: 260px; 
  height: 100%; 
  position: absolute;
  right: 0;
  bottom: 0;
   border-radius: 18px;
  /* object-fit: contain;  */
  /* object-fit: cover;  */ 
`;
