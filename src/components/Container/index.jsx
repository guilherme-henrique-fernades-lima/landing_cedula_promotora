import styled from "styled-components";

export const ContainerFluid = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const ContainerResponsive = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 70%;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1281px) {
    background-color: green;
    width: 80%;
  }

  @media (max-width: 769px) {
    background-color: blue;
    width: 90%;
  }

  @media (max-width: 481px) {
    background-color: red;
    width: 100%;
  }
`;
