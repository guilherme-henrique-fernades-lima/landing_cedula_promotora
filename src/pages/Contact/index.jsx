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
            <S.ContentInfo>
              <S.WrapperInfo>
                <div className="icon">
                  <LocationDot />
                </div>
                <a
                  href="https://maps.app.goo.gl/ECxjAGTv4ybx4JCX7"
                  target="_blank"
                >
                  Avenida Marechal Juarez Távora, Quadra 35, Casa 25/B, Bairro:
                  Parque Piauí - Teresina, 64025-196
                </a>
              </S.WrapperInfo>

              <S.WrapperInfo>
                <div className="icon">
                  <Whatsapp />
                </div>
                <a
                  href="https://wa.me/5586999335592?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20de%20empréstimo%20da%20Cédula%20Promotora."
                  target="_blank"
                >
                  (86) 99933-5592
                </a>
              </S.WrapperInfo>

              <S.WrapperInfo>
                <div className="icon">
                  <Whatsapp />
                </div>
                <a
                  href="https://wa.me/86981264163?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20opções%20de%20empréstimo%20da%20Cédula%20Promotora."
                  target="_blank"
                >
                  (86) 98126-4163
                </a>
              </S.WrapperInfo>
            </S.ContentInfo>

            <S.ImageMap
              src="./img/map-location.png"
              alt="Localização da Cédula Promotora"
            />
          </S.Content>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
