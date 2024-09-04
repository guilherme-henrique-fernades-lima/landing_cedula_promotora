import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import TitleSection from "../../components/TitleSection";

import * as S from "./styles";

export default function Services() {
  return (
    <ContainerFluid id="services" backgroundColor="#fff">
      <ContainerResponsive>
        <S.Section>
          <TitleSection firstText="SERVIÇOS" secondText="OFERECIDOS" />

          <S.Grid>
            {[1, 2, 3, 4].map((item, index) => (
              <S.Card key={index}>
                <div className="circle">
                  <div className="circleInside">
                    <S.Icon />
                  </div>
                </div>
                <h3>
                  EMPRÉSTIMO
                  <br />
                  CONSIGNADO
                </h3>
                <p>Taxas reduzidas e parcelas descontadas direto na folha</p>
              </S.Card>
            ))}
          </S.Grid>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
