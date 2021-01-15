import React from 'react';

import { 
  Container,
  WrapperContainer,
  CardImage,
  CardTitle,
  CardDescripton,
  Action,
} from './styles';

function Card({content}) {
  return (
    <Container>
      <WrapperContainer>
        <CardImage>
          <img 
            src={content.image}
            alt="Produto Prodaily"
            />
        </CardImage>
        <CardTitle>
          {content.title}
        </CardTitle>
        <CardDescripton>
          {content.description}
        </CardDescripton>
        <Action href={content.link}>
          Eu quero
        </Action>
      </WrapperContainer>
    </Container>
  );
}

export default Card;