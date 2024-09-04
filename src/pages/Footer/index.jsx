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
              <a>
                <LogoWhatsapp />
              </a>

              <a>
                <Instagram />
              </a>

              <a>
                <Telegram />
              </a>

              <a>
                <FacebookSquare />
              </a>
            </div>
          </div>

          <div className="wrapperNavigation">aa</div>
        </S.Section>
      </ContainerResponsive>

      <S.Divider />

      <ContainerResponsive>
        <S.FooterInfo>
          <a href="">Cédula Promotora 2024 © Todos os direitos reservados</a>
          <a href="">Desenvolvido por: GTECH</a>
        </S.FooterInfo>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
