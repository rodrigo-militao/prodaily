import React from 'react';

import { 
  Container,
  WrapperContainer,
  Wrapper,
  SiteBranding,
  ImageBranding,
  MainHeaderBar,
  HeaderNav,
  HeaderNavList,
 } from './styles';

function Header() {
  return (
    <Container>
      <WrapperContainer>
        <Wrapper>
          <SiteBranding>
            <span>
              <a href="/" rel="home">
                <ImageBranding
                  alt="ProDaily"
                  src={"https://websitedemos.net/plant-store-02/wp-content/uploads/sites/410/2020/06/plants-store-logo-green.svg"}
                />
              </a>
            </span>
              <h1>Prodaily</h1>
          </SiteBranding>

          <MainHeaderBar>
            <HeaderNav>
              <HeaderNavList>
                <li>
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/loja">Loja</a>
                </li>
                <li>
                  <a href="/contato">Contato</a>
                </li>
                <li>
                  <a href="/minha-conta">Minha Conta</a>
                </li>
              </HeaderNavList>
            </HeaderNav>
          </MainHeaderBar>

        </Wrapper>
      </WrapperContainer>
    </Container>
  );
}

export default Header;