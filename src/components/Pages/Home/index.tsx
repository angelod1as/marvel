import Loading from '@components/Loading'
import Logo from '@components/Logo'
import Search from '@components/Search'
import Footer from '@components/Footer'
import Container from '@components/Container'
import { Content } from './styles'

export default function Home() {
  const loaded = true

  return (
    <Container>
      <Logo />
      <Content>
        {loaded ? <Search /> : <Loading />}
        <Footer />
      </Content>
    </Container>
  )

  // return <>{loaded ? <Search /> : <Loading />}</>
}
