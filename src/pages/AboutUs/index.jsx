import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import TitleSection from "../../components/TitleSection";

import * as S from "./styles";

export default function AboutUs() {
  return (
    <ContainerFluid id="about">
      <ContainerResponsive>
        <S.Section>
          <TitleSection
            firstText="SOBRE NÓS DA"
            secondText="CÉDULA PROMOTORA"
          />
          <S.Content>
            <S.BrandHistoryWrapper>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s.
              </p>
            </S.BrandHistoryWrapper>

            <S.CardsBrandWrapper>
              <p>aaaa</p>
              <p>bbbb</p>
              <p>cccc</p>
              <p>dddd</p>
            </S.CardsBrandWrapper>
          </S.Content>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
