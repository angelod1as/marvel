import { Wrapper, Logo, Footer } from './styles'
import Link from 'next/link'

export default function Container({ children }) {
  return (
    <Wrapper>
      <Link href="/">
        <Logo>Mysuperhero</Logo>
      </Link>
      {children}
      <Footer>
        <a href="http://marvel.com" target="_blank" rel="noreferrer">
          Data provided by Marvel. © 2020 MARVEL
        </a>
      </Footer>
    </Wrapper>
  )
}
