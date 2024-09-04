import styled from "styled-components";

const WrapperTitle = styled.h1`
  width: 100%;
`;

const Title = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  border-left: 8px solid ${(props) => props.theme.colors.brand};

  h2 {
    margin-left: 15px;
    font-size: 32px;
  }

  .normalText {
    color: ${(props) => props.theme.colors.text};
    font-weight: 300;
  }

  .brand {
    font-weight: 900;
    color: ${(props) => props.theme.colors.brand};
  }
`;

export default function TitleSection({ firstText, secondText }) {
  return (
    <WrapperTitle>
      <Title>
        <h2 className="normalText">{firstText}</h2>
        <h2 className="brand">{secondText}</h2>
      </Title>
    </WrapperTitle>
  );
}
