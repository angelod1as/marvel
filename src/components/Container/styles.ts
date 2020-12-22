import styled from 'styled-components'
import img from './bg-min.jpg'

export const Div = styled.div`
  display: grid;
  grid-template-rows: 200px 1fr;
  height: 100%;
  min-height: 100vh;

  text-align: center;

  background-image: url(${img});
  background-color: black;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
`
