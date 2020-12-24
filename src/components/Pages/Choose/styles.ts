import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;

  color: white;
  background-color: black;
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

export const List = styled.div`
  padding: 120px 30px;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
`

export const Hero = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  cursor: pointer;
  transition: all 0.3s ease-out;

  &:hover {
    img {
      transform: translate(-10px) rotate(-5deg);
    }
    p {
      transform: translate(10px) rotate(5deg);
    }
  }
`

export const Name = styled.p`
  transition: all 0.3s ease-out;
  margin: 0;
`

export const Img = styled.img`
  transition: all 0.3s ease-out;
  width: 100px;
  height: 100px;
  display: block;
  max-width: 200px;
  max-height: 200px;
  margin: 15px 10px 15px 0;
  border-radius: 10px;
  border: 1px solid white;

  background-color: ${p => p.theme.color.olive};
`
