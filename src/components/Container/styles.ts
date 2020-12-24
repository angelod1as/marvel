import styled from 'styled-components'

export const Wrapper = styled.div`
  min-height: 100%;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  text-align: center;
`

export const Logo = styled.h1`
  cursor: pointer;
  position: fixed;
  text-transform: uppercase;
  font-size: 30px;
  color: white;
  padding: 10px 0 40px 0;
  margin: 0;

  @media (min-width: 600px) {
    font-size: 48px;
  }
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 0) 100%
  );
  display: block;
  width: 100%;
  z-index: 10;
`

export const Footer = styled.footer`
  font-size: 0.7em;
  color: white;
  z-index: 2;

  position: fixed;
  bottom: 0px;
  left: 0;
  width: 100%;
  text-align: center;

  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 35%,
    rgba(0, 0, 0, 0) 100%
  );

  padding: 25px 0 15px;

  a {
    opacity: 0.5;
    color: white;
  }
`
