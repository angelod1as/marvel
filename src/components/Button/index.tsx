import { StyledButton } from './styles'

export default function Button({ children, onClick }) {
  return <StyledButton {...{ onClick }}>{children}</StyledButton>
}
