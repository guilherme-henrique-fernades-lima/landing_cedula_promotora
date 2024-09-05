import styled from "styled-components";

const WrapperTitle = styled.h1`
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-left: 8px solid
    ${(props) => (props.contrastText ? "#fff" : props.theme.colors.brand)};

  h2 {
    margin-left: 15px;
    font-size: 32px;
  }

  .normalText {
    /* color: ${(props) => props.theme.colors.text}; */
    font-weight: 300;
    color: ${(props) =>
      props.contrastText ? "#fff" : props.theme.colors.text};
  }

  .brand {
    font-weight: 900;
    color: ${(props) =>
      props.contrastText ? "#fff" : props.theme.colors.brand};
  }
`;

export default function TitleSection({ firstText, secondText, contrastText }) {
  return (
    <WrapperTitle>
      <Title contrastText={contrastText}>
        <h2 className="normalText">{firstText}</h2>
        <h2 className="brand">{secondText}</h2>
      </Title>
    </WrapperTitle>
  );
}
