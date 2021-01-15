import styled from 'styled-components';

export const Container = styled.div`
  width: 33.333%;
  padding: 55px 20px;
  background-color: #efeef4;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 18px;
  border-radius: 10px;

  &:hover {
    box-shadow: 0 64px 120px -40px rgba(0,0,0,.16);
  }
`;

export const WrapperContainer = styled.div`
  padding: 10px;
  margin: 0 32px 0 0;
`;

export const CardImage = styled.div`
`;

export const CardTitle = styled.h4`
  margin-bottom: 8px;
`;

export const CardDescripton = styled.p`
  margin-bottom: 18px;
`;

export const Action = styled.a`
  text-decoration: none;
  fill: #fc7978;
  color: #fc7978;
  background-color: transparent;
  padding: 0;
`;

