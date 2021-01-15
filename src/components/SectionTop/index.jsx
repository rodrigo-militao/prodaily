import React from 'react';

import { 
  Container,
  BackgroundOverlay,
  WrapperContainer,
  Content,
  Wraper,
  Button,
} from './styles';

function SectionTop() {
  return (
    <div>
      <Container>
        <BackgroundOverlay />
        <WrapperContainer>
          <Wraper>
            <Content>
              <h1>Os melhores cosméticos da região.</h1>
              <Button href="#destaque">
                <span>
                  Promoções
                </span>
              </Button>
            </Content>
          </Wraper>
        </WrapperContainer>
      </Container>
    </div>
  );
}

export default SectionTop;