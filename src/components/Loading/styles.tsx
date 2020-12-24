import styled from '@styles/styled-components'
import { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const rotation = keyframes`
  0% { transform:rotate(0deg); }
  100% { transform: rotate(360deg); }
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

export const Img = styled.img`
  width: 100px;
  height: 100px;
  height: auto;
  z-index: 5;

  animation: ${rotation} 3s infinite linear;
`

export const Background = styled.div`
  z-index: 1;
  background-color: black;
  opacity: 0.8;
  width: 100vw;
  height: 100vh;
  display: flex;
`
