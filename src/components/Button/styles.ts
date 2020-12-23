import styled from 'styled-components'

export const StyledButton = styled.button`
  background-color: black;
  border: 1px solid white;
  border-radius: 5px;
  padding: 10px;
  color: white;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${p => p.theme.color.red};
  }
`
