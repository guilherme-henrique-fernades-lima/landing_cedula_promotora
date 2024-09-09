import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import TitleSection from "../../components/TitleSection";

import * as S from "./styles";

import { ArrowheadUpOutline } from "@styled-icons/evaicons-outline";
import { MoneyCheckDollar } from "@styled-icons/fa-solid";
import { Handshake } from "@styled-icons/fa-regular";
import { HealthBook } from "@styled-icons/remix-line";
import { DocumentBulletListClock } from "@styled-icons/fluentui-system-filled";
import { Cred } from "@styled-icons/crypto";

function ServiceCard({ firstText, secondText, subtitle, icon }) {
  return (
    <S.Card>
      <div className="circle">
        <div className="circleInside">{icon}</div>
      </div>
      <h3>
        {firstText}
        <br />
        {secondText}
      </h3>
      <p>{subtitle}</p>
    </S.Card>
  );
}

export default function Services() {
  return (
    <ContainerFluid id="services" backgroundColor="#fff">
      <ContainerResponsive>
        <S.Section>
          <TitleSection firstText="SERVIÇOS" secondText="OFERECIDOS" />

          <S.Grid>
            <ServiceCard
              firstText="PORTABILIDADE"
              secondText="DE CRÉDITO"
              subtitle="Economize nas suas parcelas. Transfira seu crédito e pague menos juros"
              icon={<Cred />}
            />

            <ServiceCard
              firstText="ANTECIPAÇÃO"
              secondText="FGTS"
              subtitle="Dinheiro do FGTS na sua conta agora. Antecipe seu fundo e resolva suas pendências"
              icon={<DocumentBulletListClock />}
            />

            <ServiceCard
              firstText="NEGOCIAÇÃO"
              secondText="DE DÍVIDAS"
              subtitle="Livre-se das dívidas. Negociamos suas dívidas e você respira aliviado"
              icon={<Handshake />}
            />

            <ServiceCard
              firstText="RECUPERAÇÃO"
              secondText="DE SCORE"
              subtitle="Melhore seu score e tenha mais crédito. Analisamos seu perfil e te ajudamos a renegociar dívidas"
              icon={<HealthBook />}
            />

            <ServiceCard
              firstText="EMPRÉSTIMO"
              secondText="CONSIGNADO"
              subtitle="Crédito fácil e seguro. Empréstimo com desconto direto na folha de pagamento"
              icon={<MoneyCheckDollar />}
            />

            <ServiceCard
              firstText="EMPRÉSTIMO"
              secondText="PESSOAL"
              subtitle="Flexibilidade para você. Conquiste seus objetivos com um empréstimo pessoal"
              icon={<MoneyCheckDollar />}
            />
          </S.Grid>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
