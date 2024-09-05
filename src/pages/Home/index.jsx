import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import * as S from "./styles";

export default function Home() {
  return (
    <ContainerFluid id="home">
      <S.BackgroundSection>
        <ContainerResponsive>
          <S.Main>
            <S.Header>
              <S.Logo src="./img/logo.png" alt="Logo da cédula promotora" />

              <S.Navbar>
                <ul>
                  <li>
                    <a href="#home">Início</a>
                  </li>
                  <li>
                    <a href="#about">Sobre nós</a>
                  </li>
                  <li>
                    <a href="#services">Serviços</a>
                  </li>
                  <li>
                    <a href="#contact">Contatos</a>
                  </li>
                </ul>
              </S.Navbar>
            </S.Header>

            <S.WrapperRowContent>
              <S.CTAContent>
                <h1>
                  Transforme seus planos em realidade com a <br />
                  <strong>CÉDULA PROMOTORA</strong>
                </h1>
                <p>
                  Libere seu crédito hoje! Simule seu empréstimo em minutos e
                  conquiste suas metas com facilidade.
                </p>
                <a href="">Entre em contato</a>
              </S.CTAContent>
              <S.ImgContent>
                <S.ImageManager
                  src="./img/gerente-segurando-tablet.png"
                  alt="Gerente da cédula promotora"
                />
              </S.ImgContent>
            </S.WrapperRowContent>
          </S.Main>
        </ContainerResponsive>
      </S.BackgroundSection>
    </ContainerFluid>
  );
}
