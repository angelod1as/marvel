import Button from '@components/Button'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
  z-index: 1;

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const HeroInfo = styled.div`
  max-width: 500px;
  padding: 120px 30px;
`

export const Title = styled.h2`
  width: 100%;
  margin: 0 auto;
  position: fixed;
  padding: 0;
  padding-top: 70px;
  padding-bottom: 30px;
  margin: 0;
  display: block;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 80%,
    rgba(0, 0, 0, 0) 100%
  );

  font-size: 1.5em;
`
export const Img = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  max-width: 200px;
  max-height: 200px;
  margin: 30px auto;
  border-radius: 10px;
  border: 1px solid white;
`

export const Error = styled.div`
  h2 {
    text-align: center;
    color: white;
    margin-bottom: 30px;
  }
`

export const StyledButton = styled(Button)`
  margin-bottom: 100px;
`

export const Background = styled.div`
  position: absolute;
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

export const Captain = styled.img``

export const Iron = styled.img``
