import Container from '@components/Container'
import Loading from '@components/Loading'
import Logo from '@components/Logo'
import Search from '@components/Search'
import Footer from '@components/Footer'

export default function Home() {
  const loaded = true

  return (
    <Container>
      <Logo />
      {loaded ? <Search /> : <Loading />}
      <Footer />
    </Container>
  )
}
