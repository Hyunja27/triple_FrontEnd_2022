import badgeApple4x from '../../img/badge-apple4x.png'
import playStore2x from '../../img/play-store2x.png'
import { styled } from '../../theme/theme'

const BadgeContainer = styled('div', {
  marginLeft: '55%',
  display: 'flex',
})

const BadgeItem = styled('div', {
  minWidth: '230px',
  textAlign: 'start',
  alignItems: 'center',
  display: 'flex',
})

const ImageContainer = styled('img', {
  width: '54px',
  height: '54px',
  marginRight: '10px',
})

const BadgeText = styled('p', {
  lineHeight: '22px',
  fontSize: '16px',
  color: 'rgba(58, 58, 58, 0.8)',
  fontWeight: 'bold',
  fontFamily: 'sans-serif',
})

export default function Badge() {
  return (
    <BadgeContainer id="awardBadgeZone">
      <BadgeItem id="awardBadge_PlayStore">
        <ImageContainer src={playStore2x} alt="PlayStoreBadge" />
        <BadgeText>
          2018 구글 플레이스토어 <br /> 올해의 앱 최우수상 수상
        </BadgeText>
      </BadgeItem>
      <BadgeItem id="awardBadge_AppleStore">
        <ImageContainer src={badgeApple4x} alt="AppleBadge" />
        <BadgeText>
          2018 애플 앱스토어 <br /> 오늘의 여행앱 선정
        </BadgeText>
      </BadgeItem>
    </BadgeContainer>
  )
}
