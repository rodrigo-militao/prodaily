import styled from 'styled-components';

export const Container = styled.section`
  background-color: #f6f8fc;
  background-image: url("https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/07/hero-bg.jpg");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background .3s,border .3s,border-radius .3s,box-shadow .3s;
  border-radius: 0 0 80px 80px;
  padding: 50px 0 0;
  z-index: 0;
`;

export const BackgroundOverlay = styled.section`
  background-color: transparent;
  background-image: linear-gradient(180deg,#FFFFFF 0%,rgba(255,255,255,0) 32%);
  opacity: 1;
  transition: background .3s,border-radius .3s,opacity .3s;
  border-radius: 0 0 80px 80px;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const WrapperContainer = styled.div`
  min-height: 80vh;
  max-width: 1200px;
  display: flex;
  margin-right: auto;
  margin-left: auto;
  z-index: 2;
  
`;

export const Wraper = styled.div`
  width: 100%;
  display: flex;
  margin: 0% 50% 0% 0%;
  padding: 0%;
  z-index: 3;
`;

export const Content = styled.div`
 padding: 230px 0 0;

 h1 {
  font-size: 4.2666666666667rem;
  font-family: 'Poppins', sans-serif;
  padding-bottom: 50px;
 }
`;


export const Button = styled.a`
  background-color: #fc7978;
  border-radius: 50px;
  padding-top: 16px;
  padding-right: 32px;
  padding-bottom: 16px;
  padding-left: 32px;
  text-decoration: none;
  span {
    color: white;
    text-transform: uppercase;
  }
`;
