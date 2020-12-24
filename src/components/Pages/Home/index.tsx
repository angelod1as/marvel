import Search from '@components/Search'
import { Container } from './styles'

import { HeroStateProps } from '@pages/_app'

export default function Home({
  setHeroList,
  setChosenHero,
  setLoaded,
}: HeroStateProps) {
  return (
    <Container>
      <Search {...{ setLoaded, setHeroList, setChosenHero }} />
    </Container>
  )
}
