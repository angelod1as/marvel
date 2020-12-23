import { StyledButton } from './styles'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void
}

export default function Button({ children, onClick }: ButtonProps) {
  return <StyledButton {...{ onClick }}>{children}</StyledButton>
}
