import Logo from '@components/Logo'
import Search from '@components/Search'
import Footer from '@components/Footer'
import { Container, Img } from './styles'

import hero from './hero.gif'
import HeroList from '@components/HeroList'
import { HeroStateProps } from '@pages/_app'

export default function Home({
  heroList,
  setHeroList,
  setChosenHero,
  setLoaded,
}: HeroStateProps) {
  return (
    <Container>
      <Logo />
      <Img src={hero} alt="" />
      <Search {...{ setLoaded, setHeroList, setChosenHero }} />
      <Footer />
      {heroList.length > 0 && (
        <HeroList {...{ setHeroList, heroList, setChosenHero }} />
      )}
    </Container>
  )

  // return <>{loaded ? <Search /> : <Loading />}</>
}
