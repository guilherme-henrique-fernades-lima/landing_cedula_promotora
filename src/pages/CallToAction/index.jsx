import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import * as S from "./styles";

export default function CallToAction() {
  return (
    <ContainerFluid id="cta">
      <ContainerResponsive>
        <S.Section>
          <S.ContentWrapper>
            <S.Content>
              <S.ImageManager
                src="./img/gerente_segurando_dinheiro.png"
                alt="Gerente da cédula promotora"
              />
            </S.Content>
          </S.ContentWrapper>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
