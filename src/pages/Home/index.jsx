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
                  <li>
                    <a href="#policy">Políticas de privacidade</a>
                  </li>
                </ul>
              </S.Navbar>
            </S.Header>

            <S.WrapperRowContent>
              <S.CTAContent>
                <h1>Transforme seus planos em realidade com a</h1>
                <h1>
                  <strong>CÉDULA PROMOTORA</strong>
                </h1>
                <p>
                  Libere seu crédito hoje! Simule seu empréstimo em minutos e
                  conquiste suas metas com facilidade.
                </p>

                <a
                  href="https://wa.me/5586999335592?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20de%20empréstimo%20da%20Cédula%20Promotora."
                  target="_blank"
                >
                  Entre em contato
                </a>
              </S.CTAContent>

              <S.ImgContent>
                <S.ImageManager
                  src="./img/blob-segurando-tablet.png"
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
