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
              <h2>NÃO PERCA TEMPO!</h2>
              <p>
                Aproveite as melhores condições de crédito
                <br /> agora e resolva suas pendências financeiras
                <br /> de forma rápida e segura
              </p>

              <a href="">ENTRE EM CONTATO</a>
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
