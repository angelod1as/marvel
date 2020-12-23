import styled from '@styles/styled-components'

export const Wrapper = styled.div`
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Img = styled.div`
  z-index: 5;

  p {
    color: white;
    text-transform: uppercase;
    font-weight: bold;
  }
`

export const Background = styled.div`
  z-index: 1;
  background-color: black;
  opacity: 0.9;
  width: 100vw;
  height: 100vh;
  display: flex;
`
