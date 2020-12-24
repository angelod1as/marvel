import styled from 'styled-components'
import { useMediaPredicate } from 'react-media-hook'

import captain from './america-min.png'
import iron from './iron-min.png'

const Captain = styled.img``
const Iron = styled.img``
const Background = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  padding: 120px 15px 0 15px;
  opacity: 0.3;

  img {
    height: 80%;
  }
`
export default function BackgroundHeroes() {
  const mediaQuery = useMediaPredicate('(min-width: 700px)')

  return (
    <>
      {mediaQuery && (
        <Background>
          <Captain src={captain} />
          <Iron src={iron} />
        </Background>
      )}
    </>
  )
}
