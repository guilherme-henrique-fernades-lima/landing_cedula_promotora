import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import TitleSection from "../../components/TitleSection";

import * as S from "./styles";

function Card({ title, subtitle }) {
  return (
    <S.Card>
      <h3>{title}</h3>
      <span>{subtitle}</span>
    </S.Card>
  );
}

export default function AboutUs() {
  return (
    <ContainerFluid id="about">
      <ContainerResponsive>
        <S.Section>
          <TitleSection
            firstText="SOBRE NÓS DA"
            secondText="CÉDULA PROMOTORA"
          />
          <S.Content>
            <S.BrandHistoryWrapper>
              <p>
                A <strong>CÉDULA PROMOTORA</strong> acredita firmemente que o
                fortalecimento da economia individual é um dos pilares
                essenciais para o crescimento e a prosperidade de uma sociedade.
                Atuamos com a missão de oferecer soluções financeiras
                acessíveis, que atendam às necessidades de nossos clientes com
                eficiência, agilidade e responsabilidade. Para nós, cada pessoa
                é única, e nosso compromisso é fornecer um atendimento
                personalizado que respeite a realidade e os objetivos de cada um
              </p>
              <p>
                Esses valores são o alicerce do nosso trabalho e estão
                incorporados em cada etapa do atendimento. Nossa equipe é
                composta por profissionais dedicados, que compartilham dos
                mesmos ideais e estão prontos para oferecer o suporte
                necessário, garantindo que cada cliente receba o melhor serviço
                possível
              </p>
              <p>
                Ao longo dos anos, construímos uma reputação de solidez e
                confiança, fruto de um trabalho incansável em busca da
                excelência. Nossos clientes sabem que podem contar com a{" "}
                <strong>CÉDULA PROMOTORA</strong> em momentos decisivos, como a
                antecipação de FGTS, empréstimos pessoais e consignados, sempre
                com condições justas e transparentes. Para nós, é fundamental
                que cada cliente tenha a clareza necessária para tomar suas
                decisões financeiras de forma segura e informada.
              </p>
            </S.BrandHistoryWrapper>

            <S.CardsBrandWrapper>
              <S.Grid>
                <Card
                  title="5000+"
                  subtitle="Mais de 5000 clientes
atendidos"
                />

                <Card
                  title="25M+"
                  subtitle="Mais de 25 mil
vendas de crédito"
                />

                <Card
                  title="12+"
                  subtitle="Benefícios
atendidos"
                />
              </S.Grid>
            </S.CardsBrandWrapper>
          </S.Content>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
