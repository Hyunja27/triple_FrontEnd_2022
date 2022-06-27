import badgeApple4x from '../img/badge-apple4x.png'
import playStore2x from '../img/play-store2x.png'
import { styled } from '../theme/theme'

const BadgeContainer = styled('div', {
  display: 'flex',
  marginLeft: '55%',
})

const BadgeItem = styled('div', {
  textAlign: 'start',
  display: 'flex',
  minWidth: '230px',
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
    <BadgeContainer>
      <BadgeItem>
        <ImageContainer src={playStore2x} alt="PlayStore badge" />
        <BadgeText>
          2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
        </BadgeText>
      </BadgeItem>
      <BadgeItem>
        <ImageContainer src={badgeApple4x} alt="Apple badge" />
        <BadgeText>
          2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
        </BadgeText>
      </BadgeItem>
    </BadgeContainer>
  )
}
