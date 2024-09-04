import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import TitleSection from "../../components/TitleSection";

import * as S from "./styles";

import { LocationDot } from "@styled-icons/fa-solid";
import { Whatsapp } from "@styled-icons/boxicons-logos";
import { Phone } from "@styled-icons/boxicons-solid";

export default function Contact() {
  return (
    <ContainerFluid id="contact">
      <ContainerResponsive>
        <S.Section>
          <TitleSection firstText="COMO NOS" secondText="ENCONTRAR" />

          <S.Content>
            <S.WrapperInfo>
              <div className="icon">
                <LocationDot />
              </div>
              <p>Address</p>
            </S.WrapperInfo>
            <S.WrapperInfo>
              <div className="icon">
                <Whatsapp />
              </div>
              <p>(86) 99999-9999</p>
            </S.WrapperInfo>
            <S.WrapperInfo>
              <div className="icon">
                <Phone />
              </div>
              <p>(86) 99999-9999</p>
            </S.WrapperInfo>
          </S.Content>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
