import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;

  text-align: center;

  background-color: black;
`

export const HeroInfo = styled.div`
  margin-bottom: 70px;
`

export const Title = styled.h2``

export const Alternates = styled.div`
  font-size: 0.9em;
  font-style: italic;
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

  background-color: ${p => p.theme.color.olive};
`

export const Ingredients = styled.div`
  max-width: 400px;
  margin: 0 auto;
`

export const Line = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 40px;
  margin: 5px 0;
`

export const Ingredient = styled.div`
  margin-right: 10px;
`

export const Quantity = styled.div`
  margin-left: 10px;
`

export const Instructions = styled.div`
  margin-top: 20px;
  padding: 0 40px 40px;
  text-align: left;
  line-height: 130%;
  max-width: 600px;
`

export const Error = styled.div`
  h2 {
    text-align: center;
    color: white;
    margin-bottom: 30px;
  }
`
