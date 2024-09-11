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

              <a
                href="https://wa.me/5586999335592?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20de%20empréstimo%20da%20Cédula%20Promotora."
                target="_blank"
              >
                ENTRE EM CONTATO
              </a>

              <S.ImageManager
                src="./img/segurando-dinheiro.png"
                alt="Gerente da cédula promotora"
              />
            </S.Content>
          </S.ContentWrapper>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
