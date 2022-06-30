import triple2x from '../img/triple2x.png'
import { styled, fadeIn } from '../theme/theme'

const LogoContainer = styled('section', {
  right: '60%',
  position: 'absolute',
  animation: `${fadeIn} 700ms`,
  animationDelay: '100ms',
})

const ImageContainer = styled('img', {
  width: '400px',
  height: '338px',
})

const ImageText = styled('span', {
  left: '50%',
  bottom: '14%',
  position: 'absolute',
  color: 'rgba(58, 58, 58, 0.7);',
  transform: 'translateX(-50%)',
  fontFamily: 'sans-serif',
  font: '10px',
})

export default function Awards() {
  return (
    <LogoContainer id="tripleLogoZone">
      <ImageContainer src={triple2x} alt="tripleCompanyLogo" />
      <ImageText>2021년 12월 기준</ImageText>
    </LogoContainer>
  )
}
