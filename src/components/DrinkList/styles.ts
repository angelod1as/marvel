import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.9);
`

export const Modal = styled.div`
  width: 80%;
  max-width: 400px;
  height: 80%;
  background-color: ${p => p.theme.color.olive};
  padding: 5px;

  border-radius: 10px;
`

export const Inner = styled.div`
  position: relative;
  color: white;
  text-transform: lowercase;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 300;
  }
  border-radius: 10px;
  border: 2px solid white;
`

export const List = styled.div`
  position: relative;
  display: block;
  padding: 10px;
  height: 100%;
  overflow-y: auto;
  * {
    display: block;
    margin: 10px auto;
  }
`

export const Close = styled.button`
  font-size: 1.2em;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: all 0.3s;
  user-select: none;
  background-color: transparent;
  border: none;
  display: block;
  padding: 0;

  &:hover {
    font-size: 2em;
    color: ${p => p.theme.color.red};
    cursor: pointer;
  }
`
