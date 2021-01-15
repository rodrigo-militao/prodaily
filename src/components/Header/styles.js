import styled from 'styled-components';

export const Container = styled.div`
  left: 0;
  right: 0;
  z-index: 99;
  padding: 10px;
  position: absolute;
`;

export const WrapperContainer = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 922px) {
    max-width: 1240px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SiteBranding = styled.div`
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
`;

export const ImageBranding = styled.img`
  line-height: 1;
  align-self: center;
  width: 50px;
  height: 50px;
  padding-right: 1em;
`;

export const MainHeaderBar = styled.div`
  display: flex;
  margin-left: auto;
  line-height: 4;
`;

export const HeaderNav = styled.nav`
  height: 100%;
  flex-grow: 1;
`;

export const HeaderNavList = styled.ul`
    list-style: none;
    margin: 0;
    padding-left: 0;
    position: relative;
    display: flex;

    li {
      padding: 15px;
      a {
        text-decoration: none;
        color: #000;
      }
    }
`;

