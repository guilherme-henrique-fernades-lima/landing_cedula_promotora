import styled from "styled-components";

import { ArrowheadUpOutline } from "@styled-icons/evaicons-outline";

const ButtonUpToTop = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  background-color: ${(props) => props.theme.colors.secondBrand};
  border-radius: 50px;
  border: 2px solid #fff;
  transition: all 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  svg {
    color: #fff;
    width: 30px;
    height: 30px;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 50px;
    height: 50px;

    svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export default function FloatButtonToTop() {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <ButtonUpToTop onClick={() => goToTop()}>
      <ArrowheadUpOutline />
    </ButtonUpToTop>
  );
}
