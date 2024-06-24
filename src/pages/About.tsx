import styled from "styled-components";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.text};
`;

const Paragraph = styled.p`
  color: ${(props) => props.theme.text};
`;

const List = styled.ul`
  color: ${(props) => props.theme.text};
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
`;

const AboutProject = () => {
  return (
    <Container>
      <Section>
        <Title>Projeto: Desenvolvimento de um Quiz sobre Pokémon</Title>
        <Paragraph>
          Este projeto consiste na criação de um quiz interativo onde os
          usuários podem adivinhar o tipo de Pokémon com base em imagens e
          opções de resposta fornecidas.
        </Paragraph>
      </Section>

      <Section>
        <Title>Dificuldades Encontradas</Title>
        <Paragraph>
          Durante o desenvolvimento deste projeto, várias dificuldades foram
          enfrentadas, incluindo:
        </Paragraph>
        <List>
          <ListItem>Integração com a API de Pokémon;</ListItem>
          <ListItem>Implementação da lógica de jogo e pontuação;</ListItem>
          <ListItem>Estilização e responsividade da aplicação;</ListItem>
          <ListItem>Gerenciamento de estado com React Hooks;</ListItem>
          <ListItem>Configuração e personalização do Ant Design.</ListItem>
        </List>
      </Section>

      <Section>
        <Title>Ferramentas Utilizadas</Title>
        <Paragraph>
          Para construir este projeto, foram utilizadas as seguintes
          ferramentas e tecnologias:
        </Paragraph>
        <List>
          <ListItem>React.js como framework front-end;</ListItem>
          <ListItem>Styled Components para estilização;</ListItem>
          <ListItem>Ant Design para componentes de interface;</ListItem>
          <ListItem>API de Pokémon para obter dados dos Pokémon;</ListItem>
          <ListItem>React Router para navegação entre páginas;</ListItem>
          <ListItem>Axios para realizar requisições HTTP;</ListItem>
          <ListItem>Git para controle de versão do código;</ListItem>
          <ListItem>Visual Studio Code como IDE de desenvolvimento.</ListItem>
        </List>
      </Section>
    </Container>
  );
};

export default AboutProject;
