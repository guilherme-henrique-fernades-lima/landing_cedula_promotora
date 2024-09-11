import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import * as S from "./styles";

import { LogoWhatsapp } from "@styled-icons/ionicons-solid";
import { Instagram } from "@styled-icons/fa-brands";
import { Telegram, FacebookSquare } from "@styled-icons/boxicons-logos";

export default function Footer() {
  return (
    <ContainerFluid backgroundColor="#1A3D74">
      <ContainerResponsive>
        <S.Section>
          <div className="wrapperImgIcons">
            <S.Logo src="./img/logo.png" alt="Logo da cédula promotora" />
            <div className="socialMedia">
              <a
                href="https://wa.me/5586999335592?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20de%20empréstimo%20da%20Cédula%20Promotora."
                target="_blank"
              >
                <LogoWhatsapp />
              </a>

              <a
                href="https://www.instagram.com/cedulapromotora?igsh=b2l2ZHczc2pnajg0"
                target="_blank"
              >
                <Instagram />
              </a>

              {/* <a>
                <Telegram />
              </a> */}

              <a
                href="https://www.facebook.com/profile.php?id=100090005748525&mibextid=ZbWKwL"
                target="_blank"
              >
                <FacebookSquare />
              </a>
            </div>
          </div>

          <div className="wrapperNavigation">
            <h4>NAVEGAÇÃO</h4>
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
          </div>
        </S.Section>
      </ContainerResponsive>

      <S.Divider />

      <ContainerResponsive>
        <S.FooterInfo>
          <span>Cédula Promotora 2024 © Todos os direitos reservados</span>
          <a href="https://linktr.ee/gtech.servicos" target="_blank">
            Desenvolvido por: GTECH
          </a>
        </S.FooterInfo>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
