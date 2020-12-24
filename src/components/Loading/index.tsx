import { ImgWrapper, Img, Background, Wrapper } from './styles'
import svg from './captain.svg'

export default function Loading() {
  return (
    <Wrapper>
      <ImgWrapper>
        <Img src={svg} alt="" />
      </ImgWrapper>
      <Background />
    </Wrapper>
  )
}
