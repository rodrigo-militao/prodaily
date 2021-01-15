import React from 'react';

import { 
  Container,
  WrapperContainer,
  Wrapper,
  Copyright,
  MadeBy,
} from './styles';

function Footer() {
  return (
    <Container>
      <WrapperContainer>
        <Wrapper>
          <Copyright>
            <span>Copyright © 2021 Prodaily Cosméticos</span>
          </Copyright>
          <MadeBy>
            <span>Feito por: Rodrigo Militão</span>
          </MadeBy>
        </Wrapper>
      </WrapperContainer>
    </Container>
  );
}

export default Footer;