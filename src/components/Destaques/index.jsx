import React from 'react';

import { 
  Container,
  WrapperContainer,
} from './styles';

import Card from './Card';

function Destaques({ data = [] }) {
  return (
    <div id="destaque">
      <Container>
        <WrapperContainer>
          { data.map(el => <Card content={el} />) }
        </WrapperContainer>
      </Container>
    </div>
  );
}

export default Destaques;