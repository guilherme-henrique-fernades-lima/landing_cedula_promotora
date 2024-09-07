import styled from "styled-components";

export const ContainerFluid = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  background-color: ${(props) => props.backgroundColor || "transparent"};
`;

export const ContainerResponsive = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 70%;
  transition: all 0.3s ease-in-out;

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 80%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 90%;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.xs}) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
