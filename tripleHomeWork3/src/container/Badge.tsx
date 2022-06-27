import badgeApple4x from '../img/badge-apple4x.png'
import playStore2x from '../img/play-store2x.png'
import { styled } from '../theme/theme'

const BadgeContainer = styled('div', {
  background: 'white',
  border: 'solid 1px red',
  textAlign: 'start',
  marginLeft: '55%',
  display: 'flex',
})

const ImageContainer = styled('img', {
  width: '54px',
  height: '54px',
})

const BadgeText = styled('p', {
  fontSize: '16px',
  lineHeight: '22px',
})

export default function Badge() {
  return (
    <>
      <BadgeContainer>
        <ImageContainer src={playStore2x} alt="PlayStore badge" />
        <BadgeText>
          2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
        </BadgeText>
      </BadgeContainer>
      <BadgeContainer>
        <ImageContainer src={badgeApple4x} alt="Apple badge" />
        <BadgeText>
          2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
        </BadgeText>
      </BadgeContainer>
    </>
  )
}
