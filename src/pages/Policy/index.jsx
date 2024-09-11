import {
  ContainerFluid,
  ContainerResponsive,
} from "../../components/Container";

import TitleSection from "../../components/TitleSection";

import * as S from "./styles";

export default function Policy() {
  return (
    <ContainerFluid id="policy" backgroundColor="#fff">
      <ContainerResponsive>
        <S.Section>
          <S.PrivacySection>
            <TitleSection firstText="POLÍTICAS DE" secondText="PRIVACIDADE" />

            <div style={{ margin: "30px 0" }} />

            <h3>1. Coleta de Informações</h3>
            <p>
              Coletamos informações pessoais que você nos fornece diretamente,
              como seu nome, e-mail, telefone e dados bancários, quando você
              preenche formulários ou realiza simulações em nosso site.
            </p>

            <div style={{ margin: "10px 0" }} />

            <h3>2. Uso de Informações</h3>

            <p>
              Utilizamos suas informações pessoais para fornecer nossos
              serviços, processar suas solicitações de empréstimo e melhorar a
              sua experiência em nosso site.
            </p>

            <div style={{ margin: "10px 0" }} />

            <h3>3. Compartilhamento de Informações</h3>
            <p>
              Nós não compartilhamos suas informações pessoais com terceiros,
              exceto quando necessário para prestar os serviços contratados ou
              por exigência legal.
            </p>

            <div style={{ margin: "10px 0" }} />

            <h3>4. Segurança de Dados</h3>
            <p>
              Adotamos medidas de segurança técnicas e organizacionais para
              proteger os seus dados pessoais contra acesso não autorizado,
              perda ou destruição.
            </p>

            <div style={{ margin: "10px 0" }} />

            <h3>5. Seus Direitos</h3>
            <p>
              Você tem o direito de acessar, corrigir ou excluir suas
              informações pessoais a qualquer momento. Entre em contato conosco
              para exercer seus direitos.
            </p>

            <div style={{ margin: "10px 0" }} />

            <h3>6. Alterações nesta Política</h3>
            <p>
              Podemos atualizar esta política de privacidade periodicamente.
              Notificaremos você sobre quaisquer mudanças substanciais através
              de nosso site.
            </p>

            <div style={{ margin: "10px 0" }} />

            <p>
              Se tiver dúvidas sobre nossa política de privacidade, entre em
              contato conosco pelo e-mail:{" "}
              <strong>cedulapromotora@gmail.com</strong>.
            </p>
          </S.PrivacySection>
        </S.Section>
      </ContainerResponsive>
    </ContainerFluid>
  );
}
