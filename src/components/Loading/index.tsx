import { ImgWrapper, Img, Background, Wrapper } from './styles'
import loadingImage from './loading.gif'

export default function Loading() {
  const ratio = 1.5

  return (
    <Wrapper>
      <ImgWrapper>
        <Img>
          <svg width={400 / ratio} height={285 / ratio}>
            <defs>
              <clipPath id="circleView">
                <circle
                  cx={200 / ratio}
                  cy={140 / ratio}
                  r={140 / ratio}
                  fill="#FFFFFF"
                />
              </clipPath>
            </defs>
            <image
              width={400 / ratio}
              height={285 / ratio}
              xlinkHref={loadingImage}
              clipPath="url(#circleView)"
            />
          </svg>
          <p>Loading...</p>
        </Img>
      </ImgWrapper>
      <Background />
    </Wrapper>
  )
}
