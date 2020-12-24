import styled from 'styled-components'
import img from './bg-min.jpg'

export const Container = styled.div`
  /* min-height: 100vh; */
  height: 100%;
  width: 100%;
  /* min-width: 100vw; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  text-align: center;

  background-image: url(${img});
  background-color: black;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
`
