import Logo from '@components/Logo'
import Search from '@components/Search'
import Footer from '@components/Footer'
import { Container, Img } from './styles'

import drink from './drink.gif'
import DrinkList from '@components/DrinkList'
import { DrinkStateProps } from '@pages/_app'

export default function Home({
  drinkList,
  setDrinkList,
  setChosenDrink,
  setLoaded,
}: DrinkStateProps) {
  return (
    <Container>
      <Logo />
      <Img src={drink} alt="" />
      <Search {...{ setLoaded, setDrinkList, setChosenDrink }} />
      <Footer />
      {drinkList.length > 0 && (
        <DrinkList {...{ setDrinkList, drinkList, setChosenDrink }} />
      )}
    </Container>
  )

  // return <>{loaded ? <Search /> : <Loading />}</>
}
