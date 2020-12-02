import React, { FunctionComponent } from 'react';
import {Button, Container, Content, Footer, FooterTab, Header, Icon, Text} from "native-base";

interface OwnProps {}

type Props = OwnProps;

const RootPage: FunctionComponent<Props> = (props) => {

  return (
      <Container>
          <Header/>
          <Content/>
          <Footer>
              <FooterTab>
                  <Button vertical>
                      <Icon name="apps"/>
                      <Text>Apps</Text>
                  </Button>
                  <Button vertical>
                      <Icon name="camera"/>
                      <Text>Camera</Text>
                  </Button>
                  <Button vertical active>
                      <Icon active name="navigate"/>
                      <Text>Navigate</Text>
                  </Button>
                  <Button vertical>
                      <Icon name="person"/>
                      <Text>Contact</Text>
                  </Button>
              </FooterTab>
          </Footer>
      </Container>
  );
};

export default RootPage;
