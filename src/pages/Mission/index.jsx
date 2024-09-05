import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";
import TitleSection from "../../components/TitleSection";

import * as S from "./styles";

import { Eye } from "@styled-icons/remix-line";
import { TargetArrow } from "@styled-icons/fluentui-system-regular";
import { DonateHeart } from "@styled-icons/boxicons-regular";

export default function Mission() {
  return (
    <ContainerFluid id="mission">
      <S.Section>
        <ContainerResponsive>
          <S.Content>
            <TitleSection
              firstText="NOSSA"
              secondText="MISSÃO, VISÃO E VALORES"
              contrastText
            />

            <S.Grid>
              <S.Card>
                <TargetArrow />
                <h3>MISSÃO</h3>
                <span>
                  Oferecer soluções financeiras ágeis e de qualidade, com base
                  no comprometimento e capacitação de nossa equipe
                </span>
              </S.Card>

              <S.Card>
                <Eye />
                <h3>VISÃO</h3>
                <span>
                  Ser líder nacional no crédito consignado, consolidando nossa
                  marca e princípios
                </span>
              </S.Card>

              <S.Card>
                <DonateHeart />
                <h3>VALORES</h3>
                <span>
                  Respeito, integridade, ética, trabalho em equipe, foco no
                  cliente e comunicação humanizada
                </span>
              </S.Card>
            </S.Grid>
          </S.Content>
        </ContainerResponsive>
      </S.Section>
    </ContainerFluid>
  );
}
