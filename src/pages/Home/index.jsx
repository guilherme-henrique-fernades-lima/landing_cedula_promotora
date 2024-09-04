import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import * as S from "./styles";

export default function Home() {
  return (
    <ContainerFluid>
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
          </S.Main>
        </ContainerResponsive>
      </S.BackgroundSection>
    </ContainerFluid>
  );
}
